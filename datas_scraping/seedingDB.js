const axios = require('axios');
const fs = require('fs');

async function getRidersDatas(url) {
  try {
    const result = await axios.get(
      url,
      {
        "Access-Control-Allow-Origin": "*"
      }
    );
    const riders = result.data;

    // console.log(riders);

    let urls = [];
    let datas = [];

    await riders.forEach((element) => {
      urls.push(`https://api.motogp.com/riders-api/riders/${element.id}`);      
    });
    
    await urls.forEach(async (element) => {
      let riderDatas = await axios.get(element);
      riderDatas = riderDatas.data;
      
      console.log(riderDatas);

      if (!riderDatas.biography.text) {
        riderDatas.biography = { text: "" };
      }

      datas.push(`
      ('${riderDatas.career[0].number}', '${riderDatas.name}', '${riderDatas.surname}', '${riderDatas.birth_date}', '${riderDatas.country.name}', '${riderDatas.physical_attributes.height}', '${riderDatas.physical_attributes.weight}', '${riderDatas.biography.text.replaceAll("'", "''")}')`);

    });

    setTimeout(() => {
      datas = datas.join(', ');
      console.log(datas);
    }, 1500);

    setTimeout(() => {
      fs.writeFile(
        `datas_scraping/sql_files/sql-test-riders.sql`,
        `INSERT INTO "rider" ("number", "firstname", "lastname", "birth_date", "country", "height", "weight", "biography") VALUES ${datas};`,
          function (err) {
            if (err) {
              console.log('an error occured while JSON Object to file');
              return console.log(err);
            }
            console.log('JSON file has been saved');
          }
      );
    }, 3000);

  } catch (error) {
    console.log(error);
  }
}

// 2022 Season
// getRidersDatas('https://api.motogp.com/riders-api/season/2022/riders?category=737ab122-76e1-4081-bedb-334caaa18c70');



// All seasons should be https://api.motogp.com/riders-api/riders?category=737ab122-76e1-4081-bedb-334caaa18c70


// Courses terminées : https://www.motogp.com/api/results-front/be/results-api/season/db8dc197-c7b2-4c1b-b3a4-6dc534c014ef/events?finished=1

// Sessions (FP, Q et RACE) pour avoir l'id et récup la classification, etc : https://www.motogp.com/api/results-front/be/results-api/event/496b5a1e-9fcd-4ccb-abcb-e0d21d2d76d8/category/e8c110ad-64aa-4e8e-8a86-f2f152f6a942/sessions

// classement de l'event : https://www.motogp.com/api/results-front/be/results-api/session/a80b1108-c605-4571-8a16-c9f2ba6e054b/classifications


// Teams : https://api.motogp.com/riders-api/season/2022/teams?category=737ab122-76e1-4081-bedb-334caaa18c70

// Un event : https://www.motogp.com/api/results-front/be/results-api/event/e59414f7-de19-400d-b7d2-6fce2b3c5448
// Pour récupérer les circuits

async function getRacesDatas(url) {
  try {
    const result = await axios.get(url);

    const races = result.data;

    let eventUrls = []; // Give us name and date of the race
    let datas = [];

    await races.forEach(element => {
      
      eventUrls.push(`https://www.motogp.com/api/results-front/be/results-api/event/${element.id}`);

    });

    // console.log(eventUrls);

    await eventUrls.forEach(async (element) => {
      let eventDatas = await axios.get(element);
      eventDatas = eventDatas.data;

      // need to get the id of the session in order to get the classification of the session.
      let currentEvent = await axios.get(`https://www.motogp.com/api/results-front/be/results-api/event/${eventDatas.id}/category/e8c110ad-64aa-4e8e-8a86-f2f152f6a942/sessions`);

      let sessionId = currentEvent.data[currentEvent.data.length - 1].id;

      let sessionDatas = await axios.get(`https://www.motogp.com/api/results-front/be/results-api/session/${sessionId}/classifications`);

      let classification = [];
      
      sessionDatas.data.classification.forEach(element => {
        classification.push(`"${element.rider.full_name}"`);
      });      

      datas.push(`
        ('${eventDatas.name.replaceAll("'", "''")}', '${eventDatas.date_end}', '{${classification}}') 
      `);

      datas.join(', ');
      console.log(datas);

      // setTimeout(() => {
      //   datas = datas.join(', ');
      //   console.log(datas);
      // }, 1500);
    
      setTimeout(() => {
        fs.writeFile(
          `datas_scraping/sql_files/sql-test-races.sql`,
          `INSERT INTO "race" ("name", "date", "rank") VALUES ${datas};`,
            function (err) {
              if (err) {
                console.log('an error occured while JSON Object to file');
                return console.log(err);
              }
              console.log('JSON file has been saved');
            }
        );
      }, 3000);

    });

  } catch (error) {
    console.log(error);
  };
};

getRacesDatas('https://www.motogp.com/api/results-front/be/results-api/season/db8dc197-c7b2-4c1b-b3a4-6dc534c014ef/events?finished=1');
// Races finished when get infos


// run node with `node --insecure-http-parser ./datas_scraping/seedingDB.js`
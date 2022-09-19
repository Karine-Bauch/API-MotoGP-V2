const axios = require('axios');
const fs = require('fs');

async function getRidersDatas(url) {
  try {
    const result = await axios.get(
      url,
    );
    const riders = result.data;

    let urls = [];
    let datas = [];

    await riders.forEach((element) => {
      urls.push(`https://api.motogp.com/riders-api/riders/${element.id}`);      
    });
    
    await urls.forEach(async (element) => {
      let riderDatas = await axios.get(element);
      riderDatas = riderDatas.data;
      
      // console.log(riderDatas);

     datas.push(`
     ('${riderDatas.career[0].number}', '${riderDatas.name}', '${riderDatas.surname}', '${riderDatas.birth_date}', '${riderDatas.country.name}', '${riderDatas.physical_attributes.height}', '${riderDatas.physical_attributes.weight}', '${riderDatas.biography.text.replaceAll("'", "''")}')`);
    });
    // 

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

    // datas = datas.join('');    

    

  } catch (error) {
    console.log(error);
  }
}

getRidersDatas('https://api.motogp.com/riders-api/season/2022/riders?category=737ab122-76e1-4081-bedb-334caaa18c70'); // 2022 Season
// All seasons should be https://api.motogp.com/riders-api/riders?category=737ab122-76e1-4081-bedb-334caaa18c70

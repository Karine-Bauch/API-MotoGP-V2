const axios = require('axios');
const fs = require('fs');

async function getDatas(url) {
  try {
    const result = await axios.get(url);

    console.log(result.data);

    result.data.forEach((element) => {
      let rider = {
        firstname: element.name,
        lastname: element.surname,
        number: element.current_career_step.number.toString(),
      }

      fs.writeFile(
        `datas_scraping/sql_files/sql-test-${rider.number}.sql`,
        `INSERT INTO "rider" ("firstname", "lastname", "number") VALUES (${rider.firstname}, ${rider.lastname}, ${rider.number});`,
        function (err) {
          if (err) {
            console.log('an error occured while JSON Object to file');
            return console.log(err);
          }
          console.log('JSON file has been saved');
        }
      );

    })

  } catch (error) {
    console.log(error);
  }
}

getDatas('https://api.motogp.com/riders-api/season/2022/riders?category=737ab122-76e1-4081-bedb-334caaa18c70');

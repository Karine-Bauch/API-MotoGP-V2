# API-MotoGP-V2

## Work in Progress - see more details below


1. Install DB :
```
sqitch deploy
```

2. Insert elements :
```
psql -U motogpv2 -d motogpv2 -f ./datas-scraping/sql-files/1-riders
```
```
psql -U motogpv2 -d motogpv2 -f ./datas-scraping/sql-files/2-races
```
```
psql -U motogpv2 -d motogpv2 -f ./datas-scraping/sql-files/3-rest-of-datas-after-30_09
```

3. If need authorization connect to DB with pg admin add
```
GRANT ALL PRIVILEGES ON rider, manufacturer, race, track, team, season, rider_has_race, rider_has_team, team_has_manufacturer TO motogpv2;
```


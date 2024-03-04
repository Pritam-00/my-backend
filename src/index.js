import express from 'express';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 3000
let ranisuiBanner, bhiguLakeBanner, hamptaPassBanner, yunamBannerPhoto

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/create', (req, res) => {
    res.send('new trek create')
  })

app.get('/login', (req, res) => {
    res.send('<h1>no login page here</h1>')
  })

app.get('/api/mockdata', (req, res) => {
  const mockdata = [
    {
      trekIndex: 101 ,
      trekImg: ranisuiBanner,
      trekName: 'Ranisui Lake Trek',
      trekState: 'Himachal',
      trekDescription: 'At the back yard of Manali, offers a serene summit (13, 220ft) and a alpine lake (12,385ft). A moderate trek with a 360 degree view of  stunning peaks, best explored from May to December.',
      trekDistance: '25km',
      trekDuration: '4Days',
      trekDifficulty: '0.7',
      trekCost: '9,500',
      trekInfo: 'stay included',
      trekLink: '/ranisui-lake-trek',
    }  ,
  
    {
      trekIndex: 102 ,
      trekImg: bhiguLakeBanner,
      trekName: 'Bhrigu Lake Trek',
      trekState: 'Himachal',
      trekDescription: 'Anali,220ft) and a alpine lake (12,385ft). A moderate trek with a 360 degree view of  stunning peaks, best explored from May to December.',
      trekDistance: '25km',
      trekDuration: '4Days',
      trekDifficulty: '0.6',
      trekCost: '9,500',
      trekInfo: 'transport included',
      trekLink: '/bhrigu-lake-trek',
    }  ,
  
    {
      trekIndex: 103 ,
      trekImg: hamptaPassBanner,
      trekName: 'Hampta Pass Trek',
      trekState: 'Himachal',
      trekDescription: 'At the back yard of Manali, offers a serene summit (13, 220ft) and a alpine lake (12,385ft). A moderate trek with a 360 degree view of  stunning peaks, best explored from May to December.',
      trekDistance: '35km',
      trekDuration: '5Days',
      trekDifficulty: '0.5',
      trekCost: '10,500',
      trekInfo: 'transport included',
      trekLink: 'hampta-pass-trek',
    }  ,
  
    {
        trekIndex: 104 ,
        trekImg: yunamBannerPhoto,
        trekName: 'Yunam Peak Expedition',
        trekState: 'Himachal',
        trekDescription: 'Anali,220ft) and a alpine lake (12,385ft). A moderate trek with a 360 degree view of  stunning peaks, best explored from May to December.',
        trekDistance: '40km',
        trekDuration: '9Days',
        trekDifficulty: '6',
        trekCost: '25,000',
        trekInfo: 'transport included',
        trekLink: '/yunam-peak-expedition', 
    }
  ];
  res.send(mockdata);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
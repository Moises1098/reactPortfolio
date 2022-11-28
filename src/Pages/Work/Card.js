import React from 'react';
import Cards from './Cardstemp';


import SelectNutrition from './assets/images/SelectNutrition.png'
import WeatherDasboard from './assets/images/WeatherDasboard.png'
import WkDaySch from './assets/images/WkDaySch.png'
import Homepage from './assets/images/Homepage.png'
import CodeQuiz from './assets/images/CodeQuiz.png'



const Card = () => {
    const cardsData = [
        {
            img: SelectNutrition,
            title: 'Select Nutrition',
            content: 'Created with Javascript, bootstrap, Handlebars and node.js',
            sitelink: 'https://selectnutrition.herokuapp.com/',
            githublink: 'https://github.com/Project2CMJ/project2CMJ',
        },

        {
            img: WeatherDasboard,
            title: 'Weather Dasboard',
            content: 'Created with Javascript, HTML and CSS',
            sitelink: 'https://moises1098.github.io/Weather-Dashboard/',
            githublink: 'https://github.com/Moises1098/Weather-Dashboard',
        },
        {
            img: WkDaySch,
            title: 'Work Day Scheduler',
            content: 'Created with Javascript, HTML and CSS',
            sitelink: 'https://moises1098.github.io/Work-day-scheduler/',
            githublink: 'https://github.com/Moises1098/Work-day-scheduler',
        },
        {
            img: Homepage,
            title: 'Covid-19 Travel Info',
            content: 'Created with Javascript, HTML and CSS and a Third-paty API',
            sitelink: 'https://learn-about-covid-19.github.io/know-about-covid-19/',
            githublink: 'https://github.com/Moises1098/know-about-covid-19',
        },
        {
            img: CodeQuiz,
            title: 'Code Quiz',
            content: 'Created with Javascript and CSS',
            sitelink: 'https://moises1098.github.io/Code-Quiz/',
            githublink: 'https://github.com/Moises1098/Code-Quiz',
        },
    ];
    return (
        <>
            {cardsData.map(({ img, title, content, sitelink, githublink }) => (
                <Cards img={img} title={title} content={content} sitelink={sitelink} githublink={githublink} />
            ))}
        </>

    );


};

export default Card;
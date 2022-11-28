import React from 'react';
import Accordion1 from './Accordion.js';
import './List.css'

const List = () => {
    const accordionData = [
        {
            title: 'Education ',
            content: `UC San Deigo and Southwestern College`

        },
        {
            title: 'Extracurriculars ',
            content: 'Circus Arts (Areial Silks, Hoop and trapeze), Musis (Voice, Piano, Ukulele), Dance (contemporary)',
        },
        {
            title: 'Spoken Langauges ',
            content: 'English, Spanish, and French'
        },
        {
            title: 'Coding Languages ',
            content: 'HTML, CSS, JavaScript, JQuery, React.js, Node.js, MySQL and NoSQL database, MongoDB, and third-party APIs',
        }
    ];
    return (
        <div>
            <h1>Skills</h1>
            <div className="accordion">
                
                {accordionData.map(({ title, content }) => (
                    <Accordion1 title={title} content={content} />
                ))}
            </div>
        </div>
    );


};

export default List;
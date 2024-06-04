import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: '12331wadsa',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: 'asd98as',
            label: 'Can I use JavaScript on a project?',
            content: 'You can use JavaScript on any project you want.'
        },
        {
            id: 'op121kq',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want.'
        }
    ];

    return (
        <Accordion items={items} />
    );
};

export default AccordionPage;
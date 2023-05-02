import Image from 'next/image'
const EventCatPage = ({ data }) => {
    return (
        <div>
            {
                data.map((ev) => (
                    <a key={ev.id} href={`/event/${ev.city}/${ev.id}`}>
                        <Image width={300} height={300} src={ev.image} alt='' />
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </a>
                ))
            }
        </div>
    );
};

export default EventCatPage;



export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat: ev.id.toString()
            }
        }
    })
    console.log(allPaths);
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {

    const id = context?.params.cat;
    const { allEvents } = await import('/data/data.json');
    const data = allEvents.filter(ev => ev.city === id);
    return { props: { data } };
}

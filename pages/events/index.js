import Image from 'next/image'
import Link from 'next/link';
const Events = ({ data }) => {
    return (
        <div>
            <h1>Event Page</h1>
            <div>
                {
                    data.map((ev) => (
                        <div className='event'>
                            <Link key={ev.id} href={`/events/${ev.id}`}>
                            <Image width={300} height={300} src={ev.image} alt='' />
                                <h2>{ev.title}</h2>
                            </Link>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Events;


export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json');
    return {
        props: {
            data: events_categories,
        }
    }
}

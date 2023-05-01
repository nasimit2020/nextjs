
const Events = () => {
    return (
        <div>
            <a href='/events/london'>
                <h2>Event in London</h2>

            </a>
            <a href='/events/sunfran'>
                <h2>Event in Sun Francisco</h2>
            </a>
            <a href='/events/barcelona'>
                <h2>Event in Barcelona</h2>
            </a>
        </div>
    );
};

export default Events;


export async function getStaticProps(){
  const { events_categories } = await import('/data/data.json');
  console.log(events_categories);
  return{
    props:{
        data: events_categories,
    }
  } 
}

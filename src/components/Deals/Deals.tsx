import image1 from '../../images/image1.jpg';
import image2 from '../../images/image4.jpg';

const Deals = () => {
  return (
    <div>
      <div style={{ display: 'flex', height: '500px', width: '100%' }}>
        <div
          style={{
            backgroundImage: `url(${image1})`,
            backgroundAttachment: 'fixed',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
          }}
        >
          <div style={{ textAlign: 'center', margin: 20 }}>
            <h1 style={{ color: 'whitesmoke' }}>Long Weekends</h1>
            <p style={{ color: 'whitesmoke' }}>Lorem ipsum dolor sit amet.</p>
            <span
              style={{
                border: '1px solid whitesmoke',
                color: 'whitesmoke',
                padding: 3,
                textTransform: 'uppercase',
              }}
            >
              Discover
            </span>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${image2})`,
            backgroundAttachment: 'fixed',
            objectFit: 'cover',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
          }}
        >
          <div style={{ textAlign: 'center', margin: 20 }}>
            <h1 style={{ color: 'whitesmoke' }}>Wander Women</h1>
            <p style={{ color: 'whitesmoke' }}>Lorem ipsum dolor sit amet.</p>
            <span
              style={{
                border: '1px solid whitesmoke',
                color: 'whitesmoke',
                padding: 3,
                textTransform: 'uppercase',
              }}
            >
              Discover
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'grid',
          justifyItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '700px',
            textAlign: 'center',
            margin: '30px',
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi illo labore sunt distinctio pariatur, odit neque in fugiat
            repellendus. Fugiat labore numquam reprehenderit vero quaerat.
          </p>
          <span
            style={{
              border: '1px solid maroon',
              color: 'maroon',
              fontSize: 20,
              padding: '2px 50px',
              textTransform: 'uppercase',
            }}
          >
            Discover
          </span>
        </div>
      </div>

      {/*  */}
      <div style={{ display: 'flex', height: '500px', width: '100%' }}>
        <div
          style={{
            backgroundImage: `url(${image1})`,
            backgroundAttachment: 'fixed',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center', margin: 20 }}>
            <h1 style={{ color: 'whitesmoke' }}>FOODIE DESTINATIONS</h1>
            <p style={{ color: 'whitesmoke' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eum
              adipisci earum officia voluptatum dolorum aspernatur maxime
              laudantium quibusdam porro excepturi, beatae, totam animi illum!
            </p>
            <span
              style={{
                border: '1px solid whitesmoke',
                color: 'whitesmoke',
                padding: 3,
                textTransform: 'uppercase',
              }}
            >
              Discover
            </span>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${image2})`,
            backgroundAttachment: 'fixed',
            objectFit: 'cover',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center', margin: 20 }}>
            <h1 style={{ color: 'whitesmoke' }}>CELEBRATIONS & ESCAPES</h1>
            <p style={{ color: 'whitesmoke' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
              veniam alias enim, itaque sequi cupiditate tempore quo unde soluta
              eius animi reprehenderit velit voluptate asperiores!
            </p>
            <span
              style={{
                border: '1px solid whitesmoke',
                color: 'whitesmoke',
                padding: 3,
                textTransform: 'uppercase',
              }}
            >
              Discover
            </span>
          </div>
        </div>
      </div>

      {/*  */}
      <div
        style={{
          display: 'grid',
          justifyItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '700px',
            textAlign: 'center',
            margin: '30px',
          }}
        >
          <h1>LOYALTY HAS ITS PERKS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            iste fugiat! Praesentium earum quas esse?
          </p>
          <span
            style={{
              border: '1px solid maroon',
              color: 'maroon',
              fontSize: 15,
              padding: '2px 50px',
              textTransform: 'uppercase',
            }}
          >
            Discover
          </span>
        </div>
      </div>
    </div>
  );
};

export default Deals;

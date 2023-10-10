import React from 'react'
import herobg from './Image/herobg.jpg';
import urger from './Image/urger.jpg';
import tomato from './Image/tomato.jpg';
import pizza2 from './Image/pizza2.png';
import birger from './Image/birger.png';
import pizza3 from './Image/pizza3.png';
import pasta from './Image/pasta.png';
import fries from './Image/fries.png';
import pizza4 from './Image/pizza4.png';
import Burger from './Image/Burger.png';
import Burger2 from './Image/Burger2.png';
import pasta1 from './Image/pasta1.png';
import client1 from './Image/client1.jpg';
import client2 from './Image/client2.jpg';
import burgerbanner from './Image/burgerbanner.png';
function Home() {
  return (
    <div className='home-container'>
      <div className='pbanner-container'>
        <div className='banner-container'>
          <img src={herobg} alt="banner" />
        </div>

        <div className='bannerContent'>
          <h1>Fast Food Restaurant</h1><br />
          <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad<br />
            mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore,<br />
            sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p><br />
          <button>Order Now</button>
        </div>


      </div>
      <div className='main-container'>
        <div className='banner-container1'>
          <div className='urger'>
            <div className='urger-img'>
              <img src={urger} alt="urger" />
            </div>
            <div className='urger-content'>
              <h5>
                Tasty Thursdays
              </h5>
              <h6>
                <span>20%</span> Off
              </h6>
              <button>Order Now</button>
            </div>
          </div>
          <div className='tomato'>
            <div className='tomato-img'>
              <img src={tomato} alt="tomato" />
            </div>
            <div className='tomato-content'>
              <h5>
                Pizza Days
              </h5>
              <h6>
                <span>15%</span> Off
              </h6>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className='main-container'>
        <div className='banner-container2'>
          <div className='pizza-container'>
            <div className='pizza-img'>
              <img src={pizza2} alt="pizza2" />
            </div>
            <div className='pizza-content'>
              <h2>Delicious Pizza</h2><br />
              <p>Veniam debitis quaerat officiis quasi<br />
                cupiditate quo, quisquam velit, magnam<br />
                voluptatem repellendus sed eaque<br /><br />
                $20 </p>
            </div>
          </div>
          <div className='burgrr-container'>
            <div className='burger-img'>
              <img src={birger} alt="birger" />
            </div>
            <div className='burger-content'>
              <h2>Delicious Burger</h2><br />
              <p>Veniam debitis quaerat officiis quasi<br />
                cupiditate quo, quisquam velit, magnam<br />
                voluptatem repellendus sed eaque<br /><br />

                $15</p>
            </div>
          </div>
          <div className='pizza3-container'>
            <div className='pizza3-img'>
              <img src={pizza3} alt="pizza3" />
            </div>
            <div className='pizza3-content'>
              <h2>Delicious Pizza</h2><br />
              <p>Veniam debitis quaerat officiis quasi<br />
                cupiditate quo, quisquam velit, magnam<br />
                voluptatem repellendus sed eaque<br /><br />
                $17</p>
            </div>
          </div>
        </div>
      </div>
      <div className='main-container'>
        <div className='banner-container3'>
          <div className='pasta-container'>
            <div className='pasta-img'>
              <img src={pasta} alt="pasta" />
            </div>
            <div className='pasta-content'>
              <h2>Delicious Pasta</h2><br />
              <p>Veniam debitis quaerat officiis quasi<br />
                cupiditate quo, quisquam velit, magnam<br />
                voluptatem repellendus sed eaque<br /><br />
                $18 </p>
            </div>
          </div>
          <div className='fries-container'>
            <div className='fries-img'>
              <img src={fries} alt="fries" />
            </div>
            <div className='fries-content'>
              <h2>Delicious Fries</h2><br />
              <p>Veniam debitis quaerat officiis quasi<br />
                cupiditate quo, quisquam velit, magnam<br />
                voluptatem repellendus sed eaque<br /><br />

                $10</p>
            </div>
          </div>
          <div className='pizza4-container'>
            <div className='pizza4-img'>
              <img src={pizza4} alt="pizza4" />
            </div>
            <div className='pizza4-content'>
              <h2>Delicious Pizza</h2><br />
              <p>Veniam debitis quaerat officiis quasi<br />
                cupiditate quo, quisquam velit, magnam<br />
                voluptatem repellendus sed eaque<br /><br />

                $15</p>
            </div>
          </div>
        </div>
      </div>
      <div className='main-container'>
        <div className='banner-container4'>
          <div className='Burger-container'>
            <div className='Burger-img'>
              <img src={Burger} alt="Burger" />
            </div>
            <div className='Burger-content'>
              <h2>Delicious Burger</h2><br />
              <p>Veniam debitis quaerat officiis quasi<br />
                cupiditate quo, quisquam velit, magnam<br />
                voluptatem repellendus sed eaque<br /><br />
                $12 </p>
            </div>
          </div>
          <div className='Burger2-container'>
            <div className='Burger2-img'>
              <img src={Burger2} alt="Burger2" />
            </div>
            <div className='Burger2-content'>
              <h2>Delicious Burger2</h2><br />
              <p>Veniam debitis quaerat officiis quasi<br />
                cupiditate quo, quisquam velit, magnam<br />
                voluptatem repellendus sed eaque<br /><br />

                $14</p>
            </div>
          </div>
          <div className='pasta1-container'>
            <div className='pasta1-img'>
              <img src={pasta1} alt="pasta1" />
            </div>
            <div className='pasta1-content'>
              <h2>Delicious Pizza</h2><br />
              <p>Veniam debitis quaerat officiis quasi<br />
                cupiditate quo, quisquam velit, magnam<br />
                voluptatem repellendus sed eaque<br /><br />

                $10</p>
            </div>
          </div>
        </div>
        <div className='button-container'>
          <button>
            <p className='button-content'>View More</p>
          </button>
        </div>
      </div>
      {/* <div className='main-container'> */}
        <div className='banner-container5'>
          <div className='banner-img'>
            <img src={burgerbanner} alt="burgerbanner" />
          </div>
          <div className='banner-content'>
            <h1>We Are Feane</h1><br />
            <p>There are many variations of passages of Lorem Ipsum available, but the<br />
              majority have suffered alteration in some form, by injected humour, or<br />
              randomised words which don't look even slightly believable. If you are<br />
              going to use a passage of Lorem Ipsum, you need to be sure there isn't<br />
              anything embarrassing hidden in the middle of text. All</p><br />
            <div className='banner-button'>
              <button>Read More</button>
            </div>
          </div>
        </div>
      {/* </div> */}
      <div className='main-container'>
        <div className='text-map'>
          <div className='form'>
            <form>
              <div>
                <input type='text' class='form-control' placeholder='Your Name' />
              </div>
              <div className='text2'>
                <input type='text' class='form-control' placeholder='Phone Number' />
              </div>
              <div className='text3'>
                <input type='text' class='form-control' placeholder='Your Mail' />
              </div>
              <div className='text4'>
                <input type='text' class='form-control' placeholder='How Many Persons?' />
              </div>
              <div className='text5'>
                <input type='text' class='form-control' placeholder='dd/mm/yy' />
              </div>
            </form><br />
            <button>BOOK NOW</button>

          </div>
          <div className='map-area'>
            <iframe src="https://www.google.com/maps/d/embed?mid=1FQb7vCUaVzChQZ1oGajy_WBtNiw&hl=en&ehbc=2E312F" width="500px" height="367px"></iframe>
          </div>
        </div>
      </div>

      <div className='main-container'>
        
        <div className='about-both'>
           <h1>What Says Our Customer</h1>

          <div className='content-both'>
            <div className='about-girl'>
              <div className='girl-content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h3>Moana Michell</h3>
                <p>magna aliqua</p>
              </div>
              <div className='image1'>
                <img src={client1} alt="girl" />
              </div>
            </div>
            <div className='about-boy'>
              <div className='boys-content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h3>Mike Hamell</h3>
                <p>magna aliqua</p>
              </div>
              <div className='image2'>
                <img src={client2} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
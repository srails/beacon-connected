import 'normalize.css';
import 'styles/App.less';

import React from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Showcase from './ShowcaseComponent';
import Section from './SectionComponent';
import BrandName from './BrandNameComponent';

import routine from '../images/businessman243.png';
import skip from '../images/happy50.png';
import loyalty from '../images/savings1.png';
import relationship from '../images/group44.png';
import marketing from '../images/businessman259.png';
import savings from '../images/coin3.png';

import phone from '../images/mobile-phone15.png';
import computer from '../images/computer186.png';


import popcorn from '../images/popcorn6.png';
import sale from '../images/sale21.png';
import hotdrink from '../images/hotdrink2.png';


class AppComponent extends React.Component {
  render() {

  	let descripStyle = {
  		fontSize:'14pt'
  	};

    return (
      <div className="index">
        <Header />

        <div className="jumbotron">
          <div className="container">
            <h1 className="small">Virtual engagement at the right place at the right time</h1>
            <p>Introducing your personal assistant <BrandName />. An iOS and Android application for the users. A platform for merchants to personally engage with their customers.</p>
          </div>
        </div>

         <Section header="Making life a little easier and rewarding">
          <div className="row">
            <div className="col-md-12">
              <Showcase styleProp={descripStyle}>
                We are creatures of habit, Doing repeditive daily tasks, Imagine if our smart phone was aware of are location and situation and could engage 
                with us helping us make purcahses, push meaningful data and real-time offers.
              </Showcase>
            </div>
          </div>
        </Section>
      
				<Section header="What is butler">
					<div className="row">
					  <div className="col-md-6">
					    <Showcase headline="Consumer Application" image={phone}>
					      A proximity aware mobile application which understands what you want depending on your location
					    </Showcase>
					  </div>
					  <div className="col-md-6">
					    <Showcase headline="Merchant Application" image={computer}>
					      An intutive platform that allows merchants to upload products and offers for which they want to enage with <BrandName /> users
					    </Showcase>
					  </div>
					</div>
				</Section>

				<Section header="Use Case">
          <div className="row">
            <div className="col-md-4">
              <Showcase headline="Coffee time" image={hotdrink}>
                It's monday morning and it's time for that pick me up from the coffee shop next to the office. As I approach the store my phone
                vibrates and displays a message from <BrandName />. It asks do I want my usual order to which I greatfuly accept and purchase
                all from my phone. I take a seat and sit back and watch the ever expanding queue and wait for butler to prompt me when my order is ready.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Movie time" image={popcorn}>
                As I walk into my local move theatre <BrandName /> engages with me, It displays the combo meal deals I enjoy and the
                current offers I accept and order my usual without queing.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Sale time" image={sale}>
                As a merchant I want to promote current offers to customers in the vacinity. Sign flippers are annoying and posters are just
                not meaningful enough to individuals. I upload my current offers to <BrandName /> and clients who have an interest in certain 
                items will recieve notifications.
              </Showcase>
            </div>
          </div>
        </Section>

        <Section header="Users">
          <div className="row">
            <div className="col-md-4">
              <Showcase headline="We get you" image={routine}>
                We all have our daily routine. At <BrandName />, we strive to assist you by understanding your routine through your everyday actions, yet being as unintrusive as possible.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Streamlined" image={skip}>
                Skip the queue by using <BrandName /> to streamline the order and payment process through proximity detection and get notified when it's ready.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Incentives" image={loyalty}>
                Earn incentives on our loyalty program every time you use <BrandName />. Even with a merchant that does not offer one!
              </Showcase>
            </div>
          </div>
        </Section>

        <Section header="Merchants">
          <div className="row">
            <div className="col-md-4">
              <Showcase headline="Improve relationships" image={relationship}>
                Get to know your customers by knowing their name and purchase history on <BrandName />.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Personal marketing" image={marketing}>
                Engage with your nearby customers with <BrandName /> at a personal level through beacon proximity. Let them know of your specials for the day.
              </Showcase>
            </div>
            <div className="col-md-4">
              <Showcase headline="Loyalty program" image={savings}>
                Customers purchasing from you through <BrandName /> will receive incentives through our program. Save the environment, and on overheads by not printing loyalty cards!
              </Showcase>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

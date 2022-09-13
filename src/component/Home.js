import React from "react";
import Articles from "./Articles";
import Bottom from "./Bottom";
import MessageForm from "./MessageForm";
import MoreDetail from "./MoreDetail";
import SimpleMap from "./SimpleMap";
const Home = () => {
  return (
    <>
      <div className="header">
        <h1>Duis mollis, est non commodo luctus,</h1>
        <br />
        <h1>nisi erat porttitor ligula, eget lacinia odio</h1>
        <br />
        <h1> sem nec elit.</h1>
      </div>
      <div className="main">
        <div className="mainText">
          <h1>Justo Vulputate Tortor Sem</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id
            quisquam laudantium distinctio sint possimus deserunt, magnam ea
            nisi eaque eos corrupti quod blanditiis error ullam dolores? Nihil
            aliquam blanditiis eius corporis,
          </h3>
          <br />
          <h4>
            sunt facere culpa rem debitis ullam. Voluptatum nesciunt architecto
            enim magni. Mollitia eos, est dolor corporis excepturi dolorem
            laudantium dolores accusamus blanditiis nobis voluptatem, fugiat
            voluptatibus tenetur quod sequi. Expedita error explicabo
            voluptatibus laudantium voluptas. Impedit a cupiditate tempora
            dolores, totam pariatur rem quidem enim laboriosam doloribus dolore
            perspiciatis sed asperiores, nobis eum quibusdam ex voluptas dolorem
            odit dolorum veritatis architecto placeat eveniet! Itaque quas
            reprehenderit natus velit laborum aliquam asperiores mollitia nihil
            eveniet porro,
          </h4>
          <br />
          <div className="quoteCont">
            <p>
              eligendi incidunt distinctio inventore excepturi minima eaque modi
              explicabo veritatis totam enim temporibus ipsa! Temporibus optio
              repellendus, praesentium aspernatur sapiente incidunt. Tempore,
              quia nam. Quaerat modi dolor perspiciatis vel quas soluta vitae,
              tempore veniam, debitis praesentium iusto similique nulla atque
              aliquid tenetur sapiente omnis recusandae quasi! Alias quam
              minima, facilis et aspernatur blanditiis voluptates nemo nisi
              libero eum, odio debitis praesentium! Consequuntur fuga, repellat
              reiciendis nesciunt quis ad, iste molestias velit quaerat officia
              harum quibusdam reprehenderit a possimus nisi fugiat ea neque
              tenetur cupiditate ipsam rerum provident est at. Porro commodi
              iusto fugiat.
              <div className="Quote">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ea
                modi ut perferendis a autem voluptatum id sit nam debitis.
                Magnam tempora, minus nulla ullam corrupti facere harum totam
                nostrum?
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              magni, consequuntur tempora expedita eaque sed deleniti. Molestiae
              dicta alias sunt nobis natus sint error fuga delectus id ipsa
              labore unde iste dolorem, sapiente optio quidem suscipit at,
              voluptatibus dolores repellendus officia. Labore dolorem iste
              velit eligendi at. Dolore, velit soluta!lorem50 Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Ratione deleniti minima
              nulla deserunt. Ullam minima iure perferendis
              <br />
              <br />
            </p>
          </div>
          <MoreDetail />
        </div>
        <div className="rightBlock">
          <div className="submenu">
            <h2>Submenu</h2>
            <ul>
              <li>Home</li>
              <li>Examples</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
          <div className="infoBox">
            <div className="bgimg"></div>
            <div className="profileimg"></div>
            <div className="detail">
              <h3>Name</h3>
              <h4>Nomen Nescio</h4>
              <h3>Email</h3>
              <h4>nomen@examples.com</h4>
              <h3>Phone</h3>
              <h4>+842 444 444</h4>
            </div>
            <MessageForm />
            <SimpleMap />
          </div>
        </div>
      </div>
      <Articles />
      <Bottom />
    </>
  );
};

export default Home;

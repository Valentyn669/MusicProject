import classes from "./ArtistsSlideIn.module.scss";
import eminem from "../../img/artists/eminem.png";
import iceCube from "../../img/artists/icecube.png";
import ArtistImage from "./ArtistImage";
import queen from "../../img/artists/queen.png";
const ArtistsSlideIn = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h1>Eminem</h1>
        <p>
          Marshall Bruce Mathers III (born October 17, 1972), known
          professionally as Eminem (/ˌɛmɪˈnɛm/; formerly stylized as EMINƎM), is
          an American rapper, songwriter, and record producer. Eminem is among
          the best-selling music artists of all time, with estimated worldwide
          sales of over 220 million records. He is credited with popularizing
          hip hop in middle America and is critically acclaimed as one of the
          greatest rappers of all time.
        </p>
        <ArtistImage slideDir="left" src={eminem} />
        <p>
          Eminem's global success and acclaimed works are widely regarded as
          having broken racial barriers for the acceptance of white rappers in
          popular music. While much of his transgressive work during the late
          1990s and early 2000s made him widely controversial, he came to be a
          representation of popular angst of the American underclass, and has
          been cited as an influence for many artists of various genres.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          voluptates delectus voluptas quas incidunt sequi, asperiores commodi
          quam sed neque eligendi numquam excepturi ipsum tempora temporibus
          ipsam laudantium! Accusamus, Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Obcaecati temporibus neque odit dicta debitis
          laudantium, alias ipsam, harum consequuntur suscipit fuga id eaque.
        </p>
        <p>
          O'Shea Jackson Sr. (born June 15, 1969), known professionally as Ice
          Cube, is an American rapper, actor, and filmmaker. His lyrics on
          N.W.A's 1988 album Straight Outta Compton contributed to gangsta rap's
          widespread popularity, and his political rap solo albums AmeriKKKa's
          Most Wanted (1990), Death Certificate (1991), and The Predator (1992)
          were critically and commercially successful.He has also had an active
          film career since the early 1990s. He was inducted into the Rock and
          Roll Hall of Fame as a member of N.W.A in 2016.
        </p>
        <p>
          A native of Los Angeles, Jackson formed his first rap group called
          C.I.A. in 1986. In 1987, with Eazy-E and Dr. Dre, he formed the
          pioneering gangsta rap group N.W.A.As its lead rapper, he wrote some
          of Dre's and most of Eazy's lyrics on Straight Outta Compton, a
          landmark album that shaped West Coast hip hop's early identity and
          helped differentiate it from East Coast rap.
        </p>
        <ArtistImage slideDir="right" src={iceCube} />
        <p>
          N.W.A was also known for their violent lyrics, threatening to attack
          abusive police and innocent civilians alike, which stirred
          controversy. After a monetary dispute over the group's management by
          Eazy-E and Jerry Heller, Cube left N.W.A in late 1989, teaming with
          New York artists and launching a solo rap career. Ice Cube entered
          cinema by playing Doughboy in director John Singleton's feature debut
          Boyz n the Hood, a 1991 drama named after a 1987 rap song that Ice
          Cube wrote. Ice Cube also cowrote and starred in the 1995 comedy film
          Friday; it premised a successful franchise and reshaped his persona
          into a bankable movie star. His directorial debut was the 1998 film
          The Players Club. As of 2020, he has appeared in about 40 films,
          including the 1999 war comedy Three Kings, family comedies like the
          Barbershop series, and buddy cop comedies 21 Jump Street, 22 Jump
          Street, and Ride Along. He was an executive producer of many of these
          films, as well as of the 2015 biopic Straight Outta Compton.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          voluptates delectus voluptas quas incidunt sequi, asperiores commodi
          quam sed neque eligendi numquam excepturi ipsum tempora temporibus
          ipsam laudantium! Accusamus, Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Obcaecati temporibus neque odit dicta debitis
          laudantium, alias ipsam, harum consequuntur suscipit fuga id eaque
          impedit sunt minus repudiandae consectetur minima quis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          voluptates delectus voluptas quas incidunt sequi, asperiores commodi
          quam sed neque eligendi numquam excepturi ipsum tempora temporibus
          ipsam laudantium! Accusamus, Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Obcaecati temporibus neque odit dicta debitis
          laudantium, alias ipsam, harum consequuntur suscipit fuga id eaque
          impedit sunt minus repudiandae consectetur minima quis!
        </p>
        <ArtistImage slideDir="left" src={queen} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          voluptates delectus voluptas quas incidunt sequi, asperiores commodi
          quam sed neque eligendi numquam excepturi ipsum tempora temporibus
          ipsam laudantium! Accusamus, Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Obcaecati temporibus neque odit dicta debitis
          laudantium, alias ipsam, harum consequuntur suscipit fuga id eaque
          impedit sunt minus repudiandae consectetur minima quis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          voluptates delectus voluptas quas incidunt sequi, asperiores commodi
          quam sed neque eligendi numquam excepturi ipsum tempora temporibus
          ipsam laudantium! Accusamus, Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Obcaecati temporibus neque odit dicta debitis
          laudantium, alias ipsam, harum consequuntur suscipit fuga id eaque
          impedit sunt minus repudiandae consectetur minima quis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          voluptates delectus voluptas quas incidunt sequi, asperiores commodi
          quam sed neque eligendi numquam excepturi ipsum tempora temporibus
          ipsam laudantium! Accusamus, Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Obcaecati temporibus neque odit dicta debitis
          laudantium, alias ipsam, harum consequuntur suscipit fuga id eaque
          impedit sunt minus repudiandae consectetur minima quis!
        </p>
      </div>
    </div>
  );
};
export default ArtistsSlideIn;

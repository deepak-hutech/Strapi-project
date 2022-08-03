import styled from "styled-components";

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:1337/api/homes?populate[Hero][populate]=*&populate[Cards][populate]=*&populate[HeroTwo][populate]=*&populate[CardTwo][populate]=*&populate[heroThree][populate]=*"
  );
  const posts = await res.json();

  return {
    props: {
      data: posts,
    },
  };
}

function HomePage(data) {
  console.log(data);
  return (
    <Wrapper>
      {data?.data?.data?.map((elem) => (
        <div>
          {elem?.attributes?.Hero?.map((herodata) => (
            <div className="container">
              <div className="left">
                <h1>{herodata?.Heading}</h1>
                <p>{herodata?.Paragraph}</p>
              </div>
              <img
                src={`http://localhost:1337${herodata?.Image?.data?.attributes?.url}`}
              ></img>
            </div>
          ))}
          {/* cards */}
          <div className="box">
            {elem?.attributes?.Cards?.map((carddata) => (
              <div className="card_container">
                <h2>{carddata?.Heading}</h2>
                <p>{carddata?.Paragraph}</p>
              </div>
            ))}
          </div>
          {/* hero two */}
          <div className="herotwo">
            {elem?.attributes?.HeroTwo?.map((thirddata) => (
              <h2 className="container">
                <div className="left">
                  <h2>{thirddata?.Heading}</h2>
                  <p>{thirddata?.Paragraph}</p>
                </div>
                <img
                  src={`http://localhost:1337${thirddata?.Image?.data?.attributes?.url}`}
                ></img>
              </h2>
            ))}
          </div>
          {/* card two */}
          <div className="card_two">
            {elem?.attributes?.CardTwo?.map((cardtwo) => (
              <div className="sceond-card">
                <img
                  src={`http://localhost:1337${cardtwo?.image?.data?.attributes?.url}`}
                ></img>
                <h2>{cardtwo?.SubHeading}</h2>
                <p>{cardtwo?.paragraph}</p>
                <button>EXPLORE > </button>
              </div>
            ))}
          </div>
          {/* hero three */}

          <div className="card_three_container">
            <div className="left">
              <h2>{elem?.attributes?.heroThree?.heading}</h2>
              <p>{elem?.attributes?.heroThree?.paragraph}</p>
            </div>
            <img
              src={`http://localhost:1337${elem?.attributes?.heroThree?.image?.data?.attributes?.url}`}
            ></img>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  .container {
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    .left {
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 459px
      width: 424px;
    
      h1 {
        width: 424px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 36.4028px;
        line-height: 58px; 
      }
      p {
        width: 424px;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        /* or 154% */
 
        letter-spacing: 1px;
      }
    }
    img {
      width: 459px;
      height: 459px;
    }
  }

.box{
    width:80%;
    margin-top: 100px;
    display:flex;
    justify-content:space-between;
    margin-left: 10%;
  .card_container{
     width: 199px;
     height: 162px;
     background: #FFFFFF;
     border-radius: 12px;
     color: #00AB88;
    
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

      h2{
        margin:0;
       font-style: normal;
       font-weight: 500;
       font-size: 36.4028px;
        line-height: 58px;
        }
        p{
           
            font-style: normal;
            font-weight: 400;
            font-size: 13.2374px;
            line-height: 18px;
            letter-spacing: 0.827336px;
        }
    }
}

.herotwo{
  margin-top:100px;
  img{height: 584px;}
}

.card_two{
  width:80%;
  display: flex;
justify-content:space-between;
margin:auto;
margin-top:100px;
.sceond-card{
  height: 490px;
   
img{
    width: 192px; 
  }
  h2{
    width: 192px;
height: 25.64px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;

  }
  p{
    width: 192px;
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
min-height: 170px; 
  }
  button{
    color: #00AB88; 
    background: none;
    border: none;
  }
}

}
.card_three_container{
  
  width:80%;
  display: flex;
justify-content:space-between;
margin:auto;
margin-top:100px; 
.left{

  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 459px
      width: 424px;
h2{
  width: 502px;
height: 144px;
font-style: normal;
font-weight: 500;
font-size: 29.7841px;
line-height: 48px;
}
p{width: 502px;
  height: 65px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* or 154% */

  letter-spacing: 1px;}

}
}
  
`;

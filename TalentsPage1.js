import React from "react";
import styled from "styled-components";
export const TalentsPage1 = ({}) => {
  const ButtonText1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const PathFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Path1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Path2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Ellipse10Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Text11Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const AuthButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonTextFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <TalentsPageRoot>
      <Element14>
        <ModeSwitch>
          <FlexColumn>
            <IconFeathersun
              src={"https://file.rendit.io/n/6TKlq8miMnMns3tqYkWc.svg"}
            />
          </FlexColumn>
        </ModeSwitch>
        <Hero>
          <Ellipse5 src={"https://file.rendit.io/n/cDvu6duJKmyMvBI6FlTM.svg"} />
          <FlexColumn1>
            <Text1>Get matched & let your job find you</Text1>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              in elementum justo quam. Auctor metus vitae suspendisse vitae
              etiam id vulputate condimentum in. In massa, augue etiam libero.
              Pharetra ut feugiat eleifend vestibulum, hac quam. Eget volutpat
              fames ultrices dui placerat.
              <br />
            </Paragraph>
            <Element15>
              <ButtonText1
                onClick={(e) => ButtonText1Function(e, "ButtonText1")}
              >
                Join Talents Pipeline
              </ButtonText1>
              <FlexRow>
                <FlexColumn2>
                  <Element3>
                    120<Element2 fontWeight={"700"}>+</Element2>
                  </Element3>
                  <Text2 width={"85px"}>Recruiters</Text2>
                </FlexColumn2>
                <FlexColumn2>
                  <Element3>
                    200<Element2 fontWeight={"700"}>+</Element2>
                  </Element3>
                  <Text2 width={"60px"}>Talents</Text2>
                </FlexColumn2>
              </FlexRow>
            </Element15>
          </FlexColumn1>
          <Ellipse6 src={"https://file.rendit.io/n/Kq0SknSPyFs6mQuZne2C.svg"} />
          <Image1 src={"https://file.rendit.io/n/vJ4lM7UnVgT9DTL6hIrb.png"} />
        </Hero>
        <WhiteFlexRow>
          <FlexColumn4 margin={"0"}>
            <Text4 textAlign={"center"}>HOW IT WORKS</Text4>
            <FlexColumn5>
              <FlexRow1>
                <Ellipse7>
                  <Text5>1</Text5>
                </Ellipse7>
                <Image2
                  src={"https://file.rendit.io/n/kWhCxjzUap3DpGMBqWRR.svg"}
                />
                <Ellipse7>
                  <Text5>2</Text5>
                </Ellipse7>
                <Image2
                  src={"https://file.rendit.io/n/kWhCxjzUap3DpGMBqWRR.svg"}
                />
                <Ellipse7>
                  <Text5>3</Text5>
                </Ellipse7>
              </FlexRow1>
              <FlexRow2>
                {[
                  {
                    childText: "Title goes here",
                  },
                  {
                    childText: "Title goes here",
                  },
                  {
                    childText: "Title goes here",
                  },
                ].map((data) => (
                  <Text8>{data.childText}</Text8>
                ))}
              </FlexRow2>
              <FlexRow3>
                {[
                  {
                    childText:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
                  },
                  {
                    childText:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
                  },
                  {
                    childText:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
                  },
                ].map((data) => (
                  <Paragraph1>{data.childText}</Paragraph1>
                ))}
              </FlexRow3>
            </FlexColumn5>
          </FlexColumn4>
        </WhiteFlexRow>
        <DashboardNavbar>
          <WhiteFlexRow1>
            <Logo1 src={"https://file.rendit.io/n/VfVgEZEDfnwhUT6rWsyd.png"} />
            <Element16>
              <Path
                onClick={(e) => PathFunction(e, "Path")}
                allowListButton={true}
              />
              <Path1
                onClick={(e) => Path1Function(e, "Path1")}
                allowListButton={true}
              />
              <Path2
                onClick={(e) => Path2Function(e, "Path2")}
                allowListButton={true}
              />
              <Ellipse10
                onClick={(e) => Ellipse10Function(e, "Ellipse10")}
                allowListButton={true}
              />
              <Text11 onClick={(e) => Text11Function(e, "Text11")}>0</Text11>
            </Element16>
            <MyAccount1>
              <AuthButton
                onClick={(e) => AuthButtonFunction(e, "AuthButton")}
                allowListButton={true}
              />
              <Text12>My Account</Text12>
              <Angledown
                src={"https://file.rendit.io/n/Dd6nm1x9sXtnbpzh1A7v.svg"}
              />
            </MyAccount1>
          </WhiteFlexRow1>
          <Element17>
            <Image4 src={"https://file.rendit.io/n/0iSiqrAViFbzDv6f9LNj.svg"} />
            <Menu>
              {[
                {
                  childText: "Services",
                },
                {
                  childText: "Academy",
                },
                {
                  childText: "Community",
                },
                {
                  childText: "Workforce",
                },
                {
                  childText: "Store",
                },
                {
                  childText: "Affiliate",
                },
              ].map((data) => (
                <Text13>{data.childText}</Text13>
              ))}
            </Menu>
            <Image5 src={"https://file.rendit.io/n/ODEc3hhUXYeTkuaS6ct3.svg"} />
          </Element17>
        </DashboardNavbar>
      </Element14>
      <Image6 src={"https://file.rendit.io/n/4ms87zzKsedko5mZZcMj.svg"} />
      <WhoSohuldJoin>
        <LEFTARROW src={"https://file.rendit.io/n/Oe2xkocRnHmV6Gj0itLZ.svg"} />
        <WhiteFlexColumn>
          <Cimobilealt
            src={"https://file.rendit.io/n/dF4v8bzLYSLhuWX15O97.svg"}
          />
          <Text14>UI/UX Design</Text14>
          <Text15>120 Jobs available</Text15>
        </WhiteFlexColumn>
        <FlexColumn6>
          <Text16>WHO SHOULD JOIN THE NERDYEYE PIPELINE</Text16>
          <Paragraph4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque volutpat nisl, turpis nisl dignissim. Ipsum.
          </Paragraph4>
          <FlexRow4 alignSelf={"stretch"}>
            <WhiteFlexColumn1>
              <Akariconsreactfill
                src={"https://file.rendit.io/n/4agtQDagwuOou7SjX9aV.svg"}
              />
              <Text14>React Developer</Text14>
              <Text15>120 jobs Available</Text15>
            </WhiteFlexColumn1>
            <WhiteFlexColumn2>
              <Cimobilealt
                src={"https://file.rendit.io/n/WViCXRapmXgbnorPNUkW.svg"}
              />
              <Text14>Graphics Design</Text14>
              <Text15>120 Jobs Available</Text15>
            </WhiteFlexColumn2>
            <WhiteFlexColumn3>
              <Cimobilealt
                src={"https://file.rendit.io/n/MswzETREdFV6PMUdieLZ.svg"}
              />
              <Text14>Developer</Text14>
              <Text15>120 Jobs Available</Text15>
            </WhiteFlexColumn3>
          </FlexRow4>
        </FlexColumn6>
        <RIGHTARROW src={"https://file.rendit.io/n/Gg0EdwkAsvnS9sFZr6jb.svg"} />
      </WhoSohuldJoin>
      <Image8 src={"https://file.rendit.io/n/BXcwVNw38rZro9xIKMAO.svg"} />
      <FlexColumn4 margin={"0px 0px 100.3px 0px"}>
        <Text4 textAlign={"left"}>JOB OFFERS</Text4>
        <Element18>
          <Image9 src={"https://file.rendit.io/n/qeEDpicirxK11bxKPwjt.png"} />
          <WhiteFlexColumn4>
            <FlexRow5>
              <Element7>
                500<Element2 fontWeight={"600"}>+</Element2>
              </Element7>
              <Element7>
                100<Element2 fontWeight={"600"}>+</Element2>
              </Element7>
            </FlexRow5>
            <FlexRow6>
              <JobOffers> Job offers</JobOffers>
              <JobOffers>Startups</JobOffers>
            </FlexRow6>
            <WhiteFlexColumn5>
              <FlexRow7>
                <Cimobilealt1
                  src={"https://file.rendit.io/n/15K3LUwKXiM7Lqa1ilyO.svg"}
                />
                <Text25 margin={"0px 0px 4.21px 0px"}>Design</Text25>
              </FlexRow7>
              <Text26>UI/UX Designer</Text26>
              <FlexRow8>
                <FlexRow9>
                  <Angledown
                    src={"https://file.rendit.io/n/k80HLGPk5PSlXtsuLoiT.svg"}
                  />
                  <Text27>Lagos</Text27>
                </FlexRow9>
                <Text28>Full time</Text28>
              </FlexRow8>
              <Image10
                src={"https://file.rendit.io/n/S7DlRM6BDvMOlGD3M811.svg"}
              />
              <FlexRow10>
                <Text29 width={"69px"}>Meta</Text29>
                <Download
                  src={"https://file.rendit.io/n/dJvajQIaEwbwrAuKVcWs.png"}
                />
              </FlexRow10>
            </WhiteFlexColumn5>
          </WhiteFlexColumn4>
          <WhiteFlexColumn6>
            <FlexRow7>
              <Cimobilealt1
                src={"https://file.rendit.io/n/15K3LUwKXiM7Lqa1ilyO.svg"}
              />
              <Text25 margin={"0px 0px 4.21px 0px"}>Design</Text25>
            </FlexRow7>
            <Text26>UX Researcher</Text26>
            <FlexRow8>
              <FlexRow9>
                <Angledown
                  src={"https://file.rendit.io/n/k80HLGPk5PSlXtsuLoiT.svg"}
                />
                <Text27>Lagos</Text27>
              </FlexRow9>
              <Text28>Full time</Text28>
            </FlexRow8>
            <Image10
              src={"https://file.rendit.io/n/S7DlRM6BDvMOlGD3M811.svg"}
            />
            <FlexRow10>
              <Text29 width={"69px"}>Meta</Text29>
              <Download
                src={"https://file.rendit.io/n/dJvajQIaEwbwrAuKVcWs.png"}
              />
            </FlexRow10>
          </WhiteFlexColumn6>
          <WhiteFlexColumn7>
            <FlexRow15>
              <Bxcodealt1
                src={"https://file.rendit.io/n/uycgPHmBmeQHlLHsvD1W.svg"}
              />
              <Text29 width={"170px"}>Web development</Text29>
            </FlexRow15>
            <Text36>Front-end developer</Text36>
            <FlexRow8>
              <FlexRow9>
                <Angledown
                  src={"https://file.rendit.io/n/HppGv3ULxtPwbVZQvDRA.svg"}
                />
                <Text27>Lagos</Text27>
              </FlexRow9>
              <Text28>Full time</Text28>
            </FlexRow8>
            <Image12
              src={"https://file.rendit.io/n/EOrncAT4UlPL0nFbI9Xl.svg"}
            />
            <FlexRow18>
              <Text29 width={"69px"}>Amazon</Text29>
              <Image13
                src={"https://file.rendit.io/n/QxPQE5klOpYhN9SCaBqo.png"}
              />
            </FlexRow18>
          </WhiteFlexColumn7>
          <WhiteFlexColumn8>
            <FlexRow7>
              <Cimobilealt1
                src={"https://file.rendit.io/n/oXWTcDBgQTD1V8b5GRpU.svg"}
              />
              <Text25 margin={"0px 0px 4.21px 0px"}>Design</Text25>
            </FlexRow7>
            <Text26>UI Designer</Text26>
            <FlexRow8>
              <FlexRow9>
                <Angledown
                  src={"https://file.rendit.io/n/HppGv3ULxtPwbVZQvDRA.svg"}
                />
                <Text27>Lagos</Text27>
              </FlexRow9>
              <Text28>Full time</Text28>
            </FlexRow8>
            <Image14
              src={"https://file.rendit.io/n/EOrncAT4UlPL0nFbI9Xl.svg"}
            />
            <FlexRow22>
              <Text29 width={"69px"}>Apple</Text29>
              <Download2
                src={"https://file.rendit.io/n/4ZEWCViAj1HJagnp7Lju.png"}
              />
            </FlexRow22>
          </WhiteFlexColumn8>
          <WhiteFlexColumn9>
            <FlexRow23>
              <Akariconsreactfill1
                src={"https://file.rendit.io/n/E1eu5KT2NBxvdqiHPiz7.svg"}
              />
              <Text25 margin={"0px 0px 7px 0px"}>Design</Text25>
            </FlexRow23>
            <Text26>React Js Developer</Text26>
            <FlexRow8>
              <FlexRow9>
                <Angledown
                  src={"https://file.rendit.io/n/HppGv3ULxtPwbVZQvDRA.svg"}
                />
                <Text27>Lagos</Text27>
              </FlexRow9>
              <Text28>Full time</Text28>
            </FlexRow8>
            <Image10
              src={"https://file.rendit.io/n/EOrncAT4UlPL0nFbI9Xl.svg"}
            />
            <FlexRow10>
              <Text29 width={"69px"}>Meta</Text29>
              <Download
                src={"https://file.rendit.io/n/1USO00xtL0XseRYzXtxg.png"}
              />
            </FlexRow10>
          </WhiteFlexColumn9>
        </Element18>
      </FlexColumn4>
      <Image16 src={"https://file.rendit.io/n/SzgB0cE4EpqNENrHij3q.svg"} />
      <WhiteFlexColumn10>
        <BrowseByIndustries1>
          browse by{" "}
          <BrowseByIndustries fontSize={"32px"}>industries</BrowseByIndustries>
        </BrowseByIndustries1>
        <Paragraph5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet
          in lacus, duis sagittis. Eget elementum duis
        </Paragraph5>
        <FlexRow27>
          <FlexColumn7
            backgroundImage={
              'url("https://file.rendit.io/n/yUWpPffXLmdrKO8fOx0y.png")'
            }
          >
            <FlexColumn8>
              <Text50>Logistics & Transportation</Text50>
              <Paragraph6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                aliquet in lacus, duis sagittis. Eget elementum duis
              </Paragraph6>
            </FlexColumn8>
          </FlexColumn7>
          <FlexColumn7
            backgroundImage={
              'url("https://file.rendit.io/n/ATb4fSEimqO0XhkzwaQO.png")'
            }
          >
            <FlexColumn10 padding={"40px 200px 40px 40px"}>
              <Text51 width={"168px"}>Fintech</Text51>
            </FlexColumn10>
          </FlexColumn7>
          <FlexColumn7
            backgroundImage={
              'url("https://file.rendit.io/n/GaBDuucEpcGHBGDWnisJ.png")'
            }
          >
            <FlexColumn10 padding={"40px 163px 40px 40px"}>
              <Text51 width={"205px"}>E-commerce</Text51>
            </FlexColumn10>
          </FlexColumn7>
        </FlexRow27>
        <FlexRow4 alignSelf={"inherit"}>
          <FlexColumn7
            backgroundImage={
              'url("https://file.rendit.io/n/4Su2Dd7QhLmPXwLoebpK.png")'
            }
          >
            <FlexColumn10 padding={"40px 173px 40px 40px"}>
              <Text51 width={"195px"}>Hospitality</Text51>
            </FlexColumn10>
          </FlexColumn7>
          <FlexColumn7
            backgroundImage={
              'url("https://file.rendit.io/n/84CstlSXcgoUVKG5YsqI.png")'
            }
          >
            <FlexColumn10 padding={"40px 266px 40px 40px"}>
              <Text51 width={"102px"}>Media</Text51>
            </FlexColumn10>
          </FlexColumn7>
          <FlexColumn7
            backgroundImage={
              'url("https://file.rendit.io/n/rxAFDQCCEHIpYODPn4XH.png")'
            }
          >
            <FlexColumn10 padding={"40px 195px 40px 40px"}>
              <Text51 width={"173px"}>Healthcare</Text51>
            </FlexColumn10>
          </FlexColumn7>
        </FlexRow4>
      </WhiteFlexColumn10>
      <WhiteFlexRow2>
        <Element19>
          <WhiteRectangle />
          <WhiteRectangle1 />
          <Image17 src={"https://file.rendit.io/n/79jqrpuk4UoDyL0sqqiL.png"} />
        </Element19>
        <FlexColumn19>
          <Text56>
            why you should join the <Text57>nerdyeye talent pipeline</Text57>
          </Text56>
          <WhiteFlexRow3 margin={"0px 0px 35px 0px"}>
            <Image18
              src={"https://file.rendit.io/n/XjTjTcvrMFC1L2pbgo8G.svg"}
            />
            <Text58>Long-term placements</Text58>
          </WhiteFlexRow3>
          <WhiteFlexRow3 margin={"0px 0px 35px 0px"}>
            <Image18
              src={"https://file.rendit.io/n/XjTjTcvrMFC1L2pbgo8G.svg"}
            />
            <Text58>Long-term placements</Text58>
          </WhiteFlexRow3>
          <WhiteFlexRow3 margin={"0px 0px 35px 0px"}>
            <Image18
              src={"https://file.rendit.io/n/XjTjTcvrMFC1L2pbgo8G.svg"}
            />
            <Text58>Long-term placements</Text58>
          </WhiteFlexRow3>
          <WhiteFlexRow3 margin={"0px 0px 35px 0px"}>
            <Image18
              src={"https://file.rendit.io/n/MuKs0gNnF85XucERebak.svg"}
            />
            <Text58>Long-term placements</Text58>
          </WhiteFlexRow3>
          <WhiteFlexRow3 margin={"0"}>
            <Image18
              src={"https://file.rendit.io/n/MuKs0gNnF85XucERebak.svg"}
            />
            <Text58>Long-term placements</Text58>
          </WhiteFlexRow3>
        </FlexColumn19>
      </WhiteFlexRow2>
      <Image23 src={"https://file.rendit.io/n/NFVjQ9uuRSssGPZ2M6kd.svg"} />
      <Testimonials>
        <Text63>success stories</Text63>
        <Paragraph7>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          lectus placerat id in vehicula facilisi. Fusce tellus fringill
        </Paragraph7>
        <FlexRow29>
          <WhiteFlexColumn11>
            <Ellipse1
              src={"https://file.rendit.io/n/5KjC3UiSjxa8yT6lsEvH.png"}
            />
            <Text64 width={"151px"}>Dave Mark</Text64>
            <Paragraph8>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              id enim auctor ultricies vulputate nisl sit lacus proin. Viverra
              nisl morbi commodo bibendum imperdiet. Vulputate in sed amet,
              malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu
              nec. Sociis condimentum molestie sed vulputate turpis maecenas
              felis duis. In posuere sit malesuada non orci sagittis sit.
            </Paragraph8>
          </WhiteFlexColumn11>
          <WhiteFlexColumn12>
            <Ellipse
              src={"https://file.rendit.io/n/ICPam6J0YNKG9cFnrWNH.png"}
            />
            <Text65>John Doe</Text65>
            <Paragraph9>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              id enim auctor ultricies vulputate nisl sit lacus proin. Viverra
              nisl morbi commodo bibendum imperdiet. Vulputate in sed amet,
              malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu
              nec. Sociis condimentum molestie sed vulputate turpis maecenas
              felis duis. In posuere sit malesuada non orci sagittis sit.
            </Paragraph9>
          </WhiteFlexColumn12>
          <WhiteFlexColumn11>
            <Ellipse1
              src={"https://file.rendit.io/n/V6LDNLIeIbb218Pc6O5F.png"}
            />
            <Text64 width={"139px"}>Helen Wills</Text64>
            <Paragraph8>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              id enim auctor ultricies vulputate nisl sit lacus proin. Viverra
              nisl morbi commodo bibendum imperdiet. Vulputate in sed amet,
              malesuada vel vel. Diam, massa libero vestibulum, interdum enim eu
              nec. Sociis condimentum molestie sed vulputate turpis maecenas
              felis duis. In posuere sit malesuada non orci sagittis sit.
            </Paragraph8>
          </WhiteFlexColumn11>
        </FlexRow29>
        <ProgressBar
          src={"https://file.rendit.io/n/O71g2156dNBFqM7K6BiB.svg"}
        />
      </Testimonials>
      <Image23 src={"https://file.rendit.io/n/NFVjQ9uuRSssGPZ2M6kd.svg"} />
      <JoinNetwork>
        <Element20>
          <Ellipse3 src={"https://file.rendit.io/n/qhgzcfHJTDGyxVJlb2H4.svg"} />
          <Ellipse4 src={"https://file.rendit.io/n/BugZfnXafnDYx2jYx5XU.png"} />
        </Element20>
        <FlexColumn20>
          <Text67>
            Join The Nerdyeye{" "}
            <BrowseByIndustries fontSize={"40px"}>Network</BrowseByIndustries>
          </Text67>
          <Paragraph11>
            Thank you for showing interest in the Nerdy Eye’s Recruitment
            program. Please fill the form below and we will connect you with
            your ideal employers as soon as possible.
          </Paragraph11>
          <FlexColumn21>
            <Inputs>
              <TextDescription1>
                Role <TextDescription>*</TextDescription>
              </TextDescription1>
              <TextInputDarkTheme />
            </Inputs>
            <Inputs>
              <TextDescription1>
                Years of Experience <TextDescription>*</TextDescription>
              </TextDescription1>
              <TextInputDarkTheme />
            </Inputs>
            <Inputs>
              <TextDescription1>
                Work type <TextDescription>*</TextDescription>
              </TextDescription1>
              <TextInputDarkTheme />
            </Inputs>
            <ButtonText onClick={(e) => ButtonTextFunction(e, "ButtonText")}>
              Submit
            </ButtonText>
          </FlexColumn21>
        </FlexColumn20>
      </JoinNetwork>
      <Footer1>
        <Paragraph12>
          All Rights Reserved Nerdy Eye Powered By Dungada Tech Ltd.
        </Paragraph12>
        <Footer>
          <FlexRow30>
            <Col>
              <Logo src={"https://file.rendit.io/n/UVqrcaF1FsN2MGAPGbaZ.png"} />
              <Text69 margin={"0px 0px 23px 0px"}>contact</Text69>
              <Paragraph13>
                We build and we teach tech and digital solutions
              </Paragraph13>
              <FlexRow31>
                <Mapmarkeraltsolid
                  src={"https://file.rendit.io/n/4YyQLhPW3211FcBVwOuG.svg"}
                />
                <Paragraph14 alignSelf={"inherit"}>
                  4 Ishola Alagomeji, Off Herbert Macaulay, Yaba, Lagos
                </Paragraph14>
              </FlexRow31>
              <FlexRow32 margin={"0px 0px 23px 0px"}>
                <Enveloperegular
                  src={"https://file.rendit.io/n/2fBAuhSSEFvMcX8eWOze.svg"}
                />
                <Paragraph14 alignSelf={"inherit"}>
                  info@nerdyeye.com
                </Paragraph14>
              </FlexRow32>
              <FlexRow32 margin={"0"}>
                <Phonealtsolid
                  src={"https://file.rendit.io/n/z2GPYmLssKV05To7Wrlo.svg"}
                />
                <Paragraph14 alignSelf={"inherit"}>
                  +234 812 724 4042
                </Paragraph14>
              </FlexRow32>
            </Col>
            <ColRow>
              <FlexColumn22>
                <Text72>services</Text72>
                <Paragraph14 alignSelf={"inherit"}>
                  Website Design/Development
                  <br />
                  <br />
                  Mobile App Development
                  <br />
                  <br />
                  Digital Marketing Campaign <br />
                  Management
                </Paragraph14>
              </FlexColumn22>
              <FlexColumn23>
                <Text72>courses</Text72>
                <Paragraph14 alignSelf={"inherit"}>
                  Digital Marketing Training
                  <br />
                  <br />
                  Graphics Design Training
                  <br />
                  <br />
                  UI/UX Design Training
                  <br />
                  <br />
                  Front-end Website Development
                  <br />
                  <br />
                  Full-stack Web And Mobile App Development
                </Paragraph14>
              </FlexColumn23>
            </ColRow>
          </FlexRow30>
          <Row>
            <FlexColumn24>
              <Text69 margin={"0"}>company</Text69>
              <Paragraph14 alignSelf={"flex-start"}>
                About
                <br />
                <br />
                Work Force
                <br />
                <br />
                Contact
                <br />
                <br />
                Blog
              </Paragraph14>
            </FlexColumn24>
            <FlexColumn25>
              <Text69 margin={"0"}>other links</Text69>
              <Paragraph14 alignSelf={"flex-start"}>
                Careers
                <br />
                <br />
                Site Map
                <br />
                <br />
                Privacy
                <br />
                <br />
                Terms
              </Paragraph14>
            </FlexColumn25>
            <FlexColumn26>
              <Text72>social media</Text72>
              <SmIcons
                src={"https://file.rendit.io/n/CcEz2NPPUMTlG1sPZDek.svg"}
              />
            </FlexColumn26>
          </Row>
        </Footer>
      </Footer1>
    </TalentsPageRoot>
  );
};
const TalentsPageRoot = styled.div`
  height: 8656px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  min-width: 1920px;
  align-items: center;
`;
const Element14 = styled.div`
  height: 1661px;
  position: relative;
  min-width: 1920px;
  margin: 0px 0px 101.3px 0px;
`;
const ModeSwitch = styled.div`
  box-shadow: -4px 0px 4px 0px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 987px;
  left: 1871px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px 0px 0px 20px;
  padding: 8px 7px 7px 9px;
`;
const FlexColumn = styled.div`
  height: 53.5px;
  background-image: url("https://file.rendit.io/n/SOqYWfx0B940eCaxHlfr.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5.75px 4.2px 5.75px 4px;
`;
const IconFeathersun = styled.img`
  width: 24.8px;
  height: 24.8px;
`;
const Hero = styled.div`
  width: 1821px;
  height: 1280px;
  position: absolute;
  left: 99px;
`;
const Ellipse5 = styled.img`
  width: 513px;
  height: 513px;
  position: absolute;
  top: 767px;
  left: 658px;
`;
const FlexColumn1 = styled.div`
  height: 480px;
  display: flex;
  position: absolute;
  top: 359px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;
const Text1 = styled.div`
  width: 850px;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #3c3a3a;
  margin: 0px 0px 20px 0px;
`;
const Paragraph = styled.div`
  width: 850px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #3c3a3a;
  margin: 0px 0px 19px 0px;
`;
const Element15 = styled.div`
  align-self: stretch;
  height: 58px;
  position: relative;
  min-width: 851px;
`;
const ButtonText1 = styled.button`
  text-align: center;
  display: flex;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
  color: #ffffff;
  background-color: #d23432;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 1px;
  border-radius: 5px;
  padding: 19px 26px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const FlexRow = styled.div`
  width: 422px;
  display: flex;
  position: absolute;
  top: 161.26px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Ellipse6 = styled.img`
  width: 448px;
  height: 447px;
  position: absolute;
  left: 1373px;
`;
const Image1 = styled.img`
  width: 552px;
  height: 710px;
  position: absolute;
  top: 277px;
  left: 999px;
`;
const WhiteFlexRow = styled.div`
  width: 1920px;
  background-color: #f5f5f5;
  display: flex;
  position: absolute;
  top: 1112px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 110px 0px;
`;
const FlexColumn5 = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  align-items: center;
  margin: 0px 0px 24px 0px;
`;
const FlexRow2 = styled.div`
  height: 29.9px;
  display: flex;
  flex-direction: row;
  gap: 280px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 55px;
  margin: 0px 0px 20.01px 0px;
`;
const FlexRow3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 170px;
  justify-content: space-between;
  align-items: center;
`;
const DashboardNavbar = styled.div`
  width: 1920px;
  height: 138px;
  position: absolute;
`;
const WhiteFlexRow1 = styled.div`
  width: 1720px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 41px 100px;
`;
const Logo1 = styled.img`
  width: 100px;
  height: 55px;
  margin: 0px 1366px 0px 0px;
`;
const Element16 = styled.div`
  width: 32.3px;
  height: 30.1px;
  position: relative;
  margin: 0px 40.7px 0px 0px;
`;
const Path = styled.button`
  width: 2.32px;
  height: 1.32px;
  position: absolute;
  top: 27.23px;
  left: 8.35px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  background-image: url("https://file.rendit.io/n/w5k6tTKQvUql88kcRh5Z.svg");
  background-size: cover;
  background-color: transparent;
  &: hover {
    opacity: 70%;
  }
`;
const Path1 = styled.button`
  width: 2.32px;
  height: 1.32px;
  position: absolute;
  top: 27.23px;
  left: 21.55px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  background-image: url("https://file.rendit.io/n/tHcDLAqd9n4WEv9adF9P.svg");
  background-size: cover;
  background-color: transparent;
  &: hover {
    opacity: 70%;
  }
`;
const Path2 = styled.button`
  width: 26.2px;
  height: 17px;
  position: absolute;
  top: 4.56px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  background-image: url("https://file.rendit.io/n/w0PJHlaBjHV8YF8a1Qvl.svg");
  background-size: cover;
  background-color: transparent;
  &: hover {
    opacity: 70%;
  }
`;
const Ellipse10 = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 1px;
  left: 16.27px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  background-image: url("https://file.rendit.io/n/OidMDEQQIA8OoTWNXviK.svg");
  background-size: cover;
  background-color: transparent;
  &: hover {
    opacity: 70%;
  }
`;
const Text11 = styled.button`
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 300;
  color: #ffffff;
  position: absolute;
  left: 20.06px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
`;
const MyAccount1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin: 14px 0px 0px 0px;
`;
const AuthButton = styled.button`
  width: 22.2px;
  height: 25px;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  background-image: url("https://file.rendit.io/n/f4wioGLNntafQ5SDGa33.svg");
  background-size: cover;
  background-color: transparent;
  &: hover {
    opacity: 70%;
  }
`;
const Text12 = styled.div`
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
`;
const Element17 = styled.div`
  width: 759px;
  height: 138px;
  position: absolute;
  left: 580px;
`;
const Image4 = styled.img`
  width: 77px;
  height: 137px;
  position: absolute;
  left: 683px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  justify-content: flex-start;
  align-items: start;
  position: absolute;
  top: 58px;
  left: 77px;
`;
const Image5 = styled.img`
  width: 77px;
  height: 135px;
  position: absolute;
  left: 1px;
`;
const Image6 = styled.img`
  width: 368px;
  height: 51.2px;
  align-self: flex-end;
  margin: 0px 404px 78.9px 0px;
`;
const WhoSohuldJoin = styled.div`
  width: 1714px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 0px 0px 101.3px 0px;
`;
const LEFTARROW = styled.img`
  width: 115px;
  height: 115px;
  margin: 0px 13px 88.84px 0px;
`;
const WhiteFlexColumn = styled.div`
  box-shadow: 0px 37px 90px 6px rgba(87, 87, 87, 0.12);
  width: 253px;
  height: 212.8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
  padding: 39.6px 34px 39.6px 40px;
  margin: 0px 34px 0px 0px;
`;
const FlexColumn6 = styled.div`
  align-self: stretch;
  width: 1097px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: flex-start;
  margin: 0px 13px 0px 0px;
`;
const Text16 = styled.div`
  font-size: 32px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #3c3a3a;
  margin: 0px 0px 21px 0px;
`;
const Paragraph4 = styled.div`
  width: 810px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #3c3a3a;
  margin: 0px 0px 61px 0px;
`;
const WhiteFlexColumn1 = styled.div`
  height: 212.8px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 39.6px 43px 39.6px 40px;
`;
const Akariconsreactfill = styled.img`
  width: 88px;
  height: 88px;
  align-self: flex-end;
  margin: 0px 9px 57.4px 0px;
`;
const WhiteFlexColumn2 = styled.div`
  width: 250px;
  height: 212.8px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
  padding: 39.6px 37px 39.6px 40px;
`;
const WhiteFlexColumn3 = styled.div`
  width: 246px;
  height: 212.8px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
  padding: 39.6px 41px 39.6px 40px;
`;
const RIGHTARROW = styled.img`
  width: 115px;
  height: 115px;
  margin: 0px 0px 88.84px 0px;
`;
const Image8 = styled.img`
  width: 368px;
  height: 51.2px;
  align-self: flex-end;
  margin: 0px 404px 78.89px 0px;
`;
const Element18 = styled.div`
  height: 880px;
  position: relative;
  min-width: 1512px;
`;
const Image9 = styled.img`
  width: 774px;
  height: 755px;
  position: absolute;
  left: 738px;
`;
const WhiteFlexColumn4 = styled.div`
  height: 472px;
  background-color: #e4e6eb;
  display: flex;
  opacity: 0.3;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  border-radius: 30px 0px 0px 30px;
  padding: 83px 227px 83px 131px;
`;
const FlexRow5 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 71px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;
`;
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 108px;
  align-items: center;
  margin: 0px 0px 69px 0px;
`;
const WhiteFlexColumn5 = styled.div`
  box-shadow: 0px 37px 90px 6px rgba(87, 87, 87, 0.12);
  height: 248.42px;
  background-color: #ffffff;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  padding: 21.79px 1px 21.79px 2px;
`;
const WhiteFlexColumn6 = styled.div`
  box-shadow: 0px 37px 90px 6px rgba(87, 87, 87, 0.12);
  height: 248.42px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 588px;
  left: 131px;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  padding: 21.79px 1px 21.79px 2px;
`;
const WhiteFlexColumn7 = styled.div`
  box-shadow: 0px 37px 90px 6px rgba(87, 87, 87, 0.12);
  height: 238px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 587.21px;
  left: 498px;
  flex-direction: column;
  border-radius: 20px;
  padding: 32px 1px 22px 2px;
`;
const FlexRow15 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  padding: 0px 28px;
  margin: 0px 0px 24px 0px;
`;
const Bxcodealt1 = styled.img`
  width: 34px;
  height: 34px;
`;
const Text36 = styled.div`
  width: 266px;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 700;
  color: #3c3a3a;
  align-self: center;
  margin: 0px 0px 26px 0px;
`;
const Image12 = styled.img`
  width: 323px;
  height: 1px;
  align-self: center;
  margin: 0px 0px 13px 0px;
`;
const FlexRow18 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 28px;
`;
const Image13 = styled.img`
  width: 89px;
  height: 51px;
`;
const WhiteFlexColumn8 = styled.div`
  box-shadow: 0px 37px 90px 6px rgba(87, 87, 87, 0.12);
  height: 254px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 254.21px;
  left: 498px;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  padding: 19px 1px 19px 2px;
`;
const Image14 = styled.img`
  width: 323px;
  height: 1px;
  align-self: center;
  margin: 0px 0px 12px 0px;
`;
const FlexRow22 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 142px;
  align-items: center;
  padding: 0px 12px;
`;
const Download2 = styled.img`
  width: 73px;
  height: 55px;
`;
const WhiteFlexColumn9 = styled.div`
  box-shadow: 0px 37px 90px 6px rgba(87, 87, 87, 0.12);
  height: 248.42px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  top: 587.21px;
  left: 865px;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
  padding: 21.79px 1px 21.79px 2px;
`;
const FlexRow23 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  padding: 0px 28px;
  margin: 0px 0px 22px 0px;
`;
const Akariconsreactfill1 = styled.img`
  width: 35px;
  height: 35px;
`;
const Image16 = styled.img`
  width: 368px;
  height: 51.2px;
  align-self: flex-end;
  margin: 0px 404px 78.71px 0px;
`;
const WhiteFlexColumn10 = styled.div`
  height: 954px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 275px 88px 272px;
  margin: 0px 0px 80px 0px;
`;
const BrowseByIndustries1 = styled.div`
  text-align: center;
  font-size: 32px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #3c3a3a;
  margin: 0px 0px 18px 0px;
  white-space: pre-wrap;
`;
const Paragraph5 = styled.div`
  text-align: center;
  width: 704px;
  height: 63px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #3c3a3a;
  margin: 0px 0px 40px 0px;
`;
const FlexRow27 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 28px 0px;
`;
const FlexColumn8 = styled.div`
  box-shadow: 0px 11px 90px 6px #e7e5e5;
  height: 325px;
  background-image: linear-gradient(180deg, rgba(7, 7, 7, 0) 0%, #020202 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 25px;
  align-items: center;
  border-radius: 15px;
  padding: 40px 50px 40px 40px;
`;
const Text50 = styled.div`
  width: 248px;
  font-size: 28px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: capitalize;
  color: #ffffff;
  align-self: flex-start;
`;
const Paragraph6 = styled.div`
  width: 367px;
  height: 63px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #ffffff;
`;
const WhiteFlexRow2 = styled.div`
  width: 1512px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 64px;
  border-radius: 20px;
  margin: 0px 0px 101px 0px;
`;
const Element19 = styled.div`
  width: 707px;
  height: 906px;
  position: relative;
  flex-grow: 1;
`;
const WhiteRectangle = styled.div`
  width: 203px;
  height: 388px;
  background-color: #e7e7e7;
  position: absolute;
  left: 175px;
  border-radius: 20px;
`;
const WhiteRectangle1 = styled.div`
  width: 203px;
  height: 388px;
  background-color: #e7e7e7;
  position: absolute;
  top: 518px;
  left: 321px;
  border-radius: 20px;
`;
const Image17 = styled.img`
  width: 707px;
  height: 906px;
  position: absolute;
`;
const FlexColumn19 = styled.div`
  width: 657px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  padding: 85px 0px;
`;
const Text56 = styled.div`
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #3c3a3a;
  align-self: flex-start;
  margin: 0px 0px 54px 0px;
  white-space: pre-wrap;
`;
const Text57 = styled.div`
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #d23432;
  display: contents;
`;
const Testimonials = styled.div`
  height: 773px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 101px 0px;
`;
const Text63 = styled.div`
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
  margin: 0px 0px 15px 0px;
`;
const Paragraph7 = styled.div`
  text-align: center;
  width: 791px;
  height: 55px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #575757;
  margin: 0px 0px 33px 0px;
`;
const FlexRow29 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 98px 0px;
`;
const WhiteFlexColumn12 = styled.div`
  box-shadow: 0px 37px 90px 6px rgba(87, 87, 87, 0.12);
  height: 355px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 72px 69px 72px 70px;
`;
const Ellipse = styled.img`
  width: 135px;
  height: 135px;
  margin: 0px 0px 36px 0px;
`;
const Text65 = styled.div`
  text-align: center;
  font-size: 28px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: capitalize;
  color: #d23431;
  margin: 0px 0px 32px 0px;
`;
const Paragraph9 = styled.div`
  text-align: center;
  width: 471px;
  height: 118px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #575757;
`;
const ProgressBar = styled.img`
  width: 106px;
  height: 24px;
`;
const JoinNetwork = styled.div`
  width: 1502px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px 133px 0px;
`;
const Element20 = styled.div`
  width: 664px;
  height: 755px;
  position: relative;
  flex-grow: 1;
`;
const Ellipse3 = styled.img`
  width: 660px;
  height: 656px;
  position: absolute;
  top: -4px;
`;
const Ellipse4 = styled.img`
  width: 623px;
  height: 623px;
  position: absolute;
  top: 31px;
`;
const FlexColumn20 = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: flex-start;
`;
const Text67 = styled.div`
  text-align: center;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #222222;
  align-self: center;
  margin: 0px 0px 19px 0px;
  white-space: pre-wrap;
`;
const Paragraph11 = styled.div`
  width: 649px;
  height: 52px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #575757;
  margin: 0px 0px 62px 0px;
`;
const FlexColumn21 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
`;
const ButtonText = styled.button`
  text-align: center;
  display: flex;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
  color: #ffffff;
  align-self: flex-start;
  background-color: #d23432;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 19px 26px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Footer1 = styled.div`
  width: 1920px;
  height: 659px;
  position: relative;
  align-items: center;
`;
const Paragraph12 = styled.div`
  display: flex;
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 300;
  color: #ffffff;
  width: 1694px;
  height: 15px;
  background-image: url("https://file.rendit.io/n/lAHhFU2FoGudSgFZsAIM.svg");
  background-size: cover;
  position: absolute;
  top: 618px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 113px 11px 113px;
`;
const Footer = styled.div`
  height: 624px;
  background-image: url("https://file.rendit.io/n/3kwscxK4Pm9ixboJ4uXE.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 54px;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 81px 0px 113px;
`;
const FlexRow30 = styled.div`
  align-self: stretch;
  height: 296px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const Col = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Logo = styled.img`
  width: 100px;
  height: 55px;
  margin: 0px 0px 35px 0px;
`;
const Paragraph13 = styled.div`
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 15.6px;
  color: #575757;
  margin: 0px 0px 28px 0px;
`;
const FlexRow31 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 23px 0px;
`;
const Mapmarkeraltsolid = styled.img`
  width: 12px;
  height: 16px;
`;
const Enveloperegular = styled.img`
  width: 16px;
  height: 12px;
  align-self: flex-end;
  margin: 0px 0px 2px 0px;
`;
const Phonealtsolid = styled.img`
  width: 16px;
  height: 16px;
  align-self: flex-end;
`;
const ColRow = styled.div`
  width: 1036px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: space-between;
`;
const FlexColumn22 = styled.div`
  width: 215px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 21px;
  flex-grow: 1;
  align-items: center;
`;
const FlexColumn23 = styled.div`
  width: 326px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;
const Row = styled.div`
  width: 1586px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FlexColumn24 = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  margin: 0px 600px 0px 0px;
`;
const FlexColumn25 = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  margin: 0px 602px 0px 0px;
`;
const FlexColumn26 = styled.div`
  width: 184px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 23px;
  flex-grow: 1;
  align-items: center;
`;
const SmIcons = styled.img`
  width: 184px;
  height: 16px;
`;
const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 14.58px;
  align-items: center;
`;
const Element3 = styled.div`
  height: 75.7px;
  font-size: 64px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #3c3a3a;
`;
const Element2 = styled.div`
  font-size: 64px;
  font-family: Montserrat;
  text-transform: uppercase;
  color: #d23431;
  display: contents;
  font-weight: ${(props) => props.fontWeight};
`;
const Text2 = styled.div`
  text-align: center;
  height: 19.4px;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 600;
  color: #3c3a3a;
  align-self: flex-start;
  width: ${(props) => props.width};
`;
const FlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.div`
  font-size: 32px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #3c3a3a;
  text-align: ${(props) => props.textAlign};
`;
const Ellipse7 = styled.div`
  width: 93px;
  background-image: url("https://file.rendit.io/n/yzvsWQ4vIAdUyNz4XNqy.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 25px 0px 30px 0px;
`;
const Text5 = styled.div`
  text-align: center;
  width: 12.4px;
  height: 38px;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #3c3a3a;
`;
const Image2 = styled.img`
  width: 409px;
  height: 23px;
`;
const Text8 = styled.div`
  text-align: center;
  width: 229px;
  height: 29.9px;
  font-size: 28px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: capitalize;
  color: #3c3a3a;
`;
const Paragraph1 = styled.div`
  text-align: center;
  width: 339px;
  height: 63px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #3c3a3a;
`;
const Angledown = styled.img`
  width: 20px;
  height: 20px;
`;
const Text13 = styled.div`
  text-align: center;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
`;
const Cimobilealt = styled.img`
  width: 88px;
  height: 88px;
  align-self: flex-end;
  margin: 0px 0px 57.4px 0px;
`;
const Text14 = styled.div`
  width: 244px;
  font-size: 28px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: capitalize;
  color: #3c3a3a;
  margin: 0px 0px 10px 0px;
`;
const Text15 = styled.div`
  width: 244px;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 23.4px;
  text-transform: capitalize;
  color: #d23431;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 50px;
  align-items: center;
  align-self: ${(props) => props.alignSelf};
`;
const Element7 = styled.div`
  font-size: 64px;
  font-family: Montserrat;
  font-weight: 600;
  text-transform: uppercase;
  color: #3c3a3a;
`;
const JobOffers = styled.div`
  width: 125px;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
  color: #222222;
  white-space: pre-wrap;
`;
const FlexRow7 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 11px;
  align-items: center;
  padding: 0px 30px;
  margin: 0px 0px 26.79px 0px;
`;
const Cimobilealt1 = styled.img`
  width: 29px;
  height: 29px;
`;
const Text25 = styled.div`
  width: 69px;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 600;
  color: #222222;
  align-self: flex-end;
  margin: ${(props) => props.margin};
`;
const Text26 = styled.div`
  width: 244px;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 700;
  color: #3c3a3a;
  align-self: flex-start;
  margin: 0px 0px 26px 28px;
`;
const FlexRow8 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 19px;
  align-items: center;
  padding: 0px 25.1px;
  margin: 0px 0px 40px 0px;
`;
const FlexRow9 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.9px;
  justify-content: center;
  align-items: center;
`;
const Text27 = styled.div`
  width: 69px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 18.2px;
  color: #222222;
`;
const Text28 = styled.div`
  width: 69px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #d23431;
  align-self: flex-end;
`;
const Image10 = styled.img`
  width: 323px;
  height: 1px;
  align-self: center;
  margin: 0px 0px 14.21px 0px;
`;
const FlexRow10 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 124px;
  align-items: center;
  padding: 0px 14px;
`;
const Text29 = styled.div`
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 600;
  color: #222222;
  width: ${(props) => props.width};
`;
const Download = styled.img`
  width: 89px;
  height: 50px;
`;
const BrowseByIndustries = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
  color: #d23431;
  display: contents;
  font-size: ${(props) => props.fontSize};
`;
const FlexColumn7 = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.backgroundImage};
`;
const FlexColumn10 = styled.div`
  box-shadow: 0px 11px 90px 6px #e7e5e5;
  height: 281px;
  background-image: linear-gradient(180deg, rgba(7, 7, 7, 0) 0%, #020202 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 15px;
  padding: ${(props) => props.padding};
`;
const Text51 = styled.div`
  font-size: 28px;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: capitalize;
  color: #ffffff;
  width: ${(props) => props.width};
`;
const WhiteFlexRow3 = styled.div`
  width: 621px;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  border-radius: 20px;
  padding: 18px;
  margin: ${(props) => props.margin};
`;
const Image18 = styled.img`
  width: 53px;
  height: 53px;
`;
const Text58 = styled.div`
  width: 374px;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 23.4px;
  text-transform: capitalize;
  color: #3c3a3a;
`;
const Image23 = styled.img`
  width: 368px;
  height: 51.2px;
  align-self: flex-end;
  margin: 0px 404px 78.8px 0px;
`;
const WhiteFlexColumn11 = styled.div`
  height: 278px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 51px 43px;
`;
const Ellipse1 = styled.img`
  width: 90px;
  height: 91px;
  margin: 0px 0px 23px 0px;
`;
const Text64 = styled.div`
  text-align: center;
  height: 22px;
  display: flex;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 23.4px;
  text-transform: capitalize;
  color: #d23431;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 25px 0px;
  width: ${(props) => props.width};
`;
const Paragraph8 = styled.div`
  text-align: center;
  width: 378px;
  height: 79px;
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 15.6px;
  color: #575757;
`;
const Inputs = styled.div`
  height: 120.4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  padding: 0.3px 0px;
`;
const TextDescription1 = styled.div`
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
  color: #575757;
  align-self: flex-start;
  margin: 0px 0px 0px 1.71px;
  white-space: pre-wrap;
`;
const TextDescription = styled.div`
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
  color: #d23431;
  display: contents;
`;
const TextInputDarkTheme = styled.div`
  width: 517px;
  height: 20px;
  background-color: #f5f5f5;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 5px;
  padding: 30px 20px 30.7px 20px;
`;
const Text69 = styled.div`
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 23.4px;
  text-transform: capitalize;
  color: #222222;
  margin: ${(props) => props.margin};
`;
const Paragraph14 = styled.div`
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.2px;
  color: #575757;
  align-self: ${(props) => props.alignSelf};
`;
const FlexRow32 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text72 = styled.div`
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 23.4px;
  text-transform: capitalize;
  color: #222222;
  align-self: flex-start;
`;

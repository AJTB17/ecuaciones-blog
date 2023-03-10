import "./App.css";
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  List,
  Divider,
  Grid,
  Image,
  OrderedList,
  Flex,
} from "@chakra-ui/react";
import Header from "./components/Header";
import EcuationContainer from "./components/EcuationContainer/EcuationContainer";
import MSustitucion from "./components/MSustitucion";
import MEqualization from "./components/MEqualization";
import MRedcution from "./components/MReduction";
import CircleIcon from "./hooks/CircleIcon";
import SEquivalent from "./components/ToSE/SEquivalent";
import SStaggered from "./components/ToSE/SStaggered";
import SCantSoluciones from "./components/ToSE/SCantSoluciones";
import TeoremaRF from "./components/TeoremaRF";

function App() {
  const bannerImg = {
    bg: "url(https://w0.peakpx.com/wallpaper/638/433/HD-wallpaper-math-equation-2016-artistic-awesome-love.jpg) center/cover no-repeat",
    filter: "auto",
    brightness: "40%",
    h: "250px",
  };
  const bannerTitle = {
    fontSize: "3xl",
    m: "20px 0",
    w: "calc(100% - 40px)",
    color: "white",
    pos: "absolute",
    transform: "translateY(-165px) translateX(40px)",
    letterSpacing: "1px",
  };

  const contentBox = {
    m: "20px 40px",
    color: "black",
    gap: "10px 10px",
    textAlign: "justify",
  };
  const handleClickScroll = (elt) => {
    const name = elt.target.className.split(" ");
    const element = document.getElementById(name[0]);
    if (elt.target.className) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ChakraProvider>
      <Header />
      <Box>
        <Box>
          <Box sx={bannerImg}></Box>
          <Heading sx={bannerTitle}>Sistemas de ecuaciones</Heading>
        </Box>
        <Grid
          p="10px 30px"
          alignItems="center"
          gridGap="10px"
          gridAutoFlow="row dense"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        >
          <Box textAlign="justify">
            <Text mr="10px" w="auto">
              ¬°Bienvenido a nuestro sitio web sobre sistemas de ecuaciones
              lineales! Las ecuaciones lineales son una parte fundamental de las
              matem√°ticas y entender c√≥mo resolverlas es una habilidad
              importante. Los sistemas de ecuaciones lineales son un conjunto de
              dos o m√°s ecuaciones lineales que comparten el mismo conjunto de
              variables.
            </Text>
            <Text>
              Estas ecuaciones se pueden usar para modelar problemas del mundo
              real, como encontrar la soluci√≥n √≥ptima para un negocio o
              determinar el costo de los materiales para un proyecto de
              construcci√≥n. En este sitio web, discutiremos c√≥mo resolver
              sistemas de ecuaciones lineales y brindaremos ejemplos para
              ayudarlo a comprender mejor los conceptos.
            </Text>
          </Box>
          <Image
            mt="10px"
            w="auto"
            src="https://aga.frba.utn.edu.ar/wp-content/uploads/2018/10/GIF021-PLANO.gif"
          />
        </Grid>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px">
          <Heading mb="10px" textAlign="left">
            Contenido
          </Heading>
          <List spacing={3} pl="20px">
            <ListItem onClick={handleClickScroll} className="SE">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistemas de ecuaciones
            </ListItem>
            <ListItem onClick={handleClickScroll} className="TSE">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Tipos Sistemas de ecuaciones
            </ListItem>
            <ListItem onClick={handleClickScroll} className="TRF">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Teorema de Rouch√©-Frobenius
            </ListItem>
            <ListItem onClick={handleClickScroll} className="MS">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Metodos de solucion
            </ListItem>
            <ListItem onClick={handleClickScroll} className="ASE">
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Aplicaciones de los sistemas de ecuaciones
            </ListItem>
          </List>
        </Box>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Grid
          w="100%"
          gridGap="10px 0"
          gridAutoFlow="row dense"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        >
          <Box sx={contentBox}>
            <Heading mb="10px" id="SE" textAlign="left">
              Sistemas de ecuaciones
            </Heading>
            <Text>
              Se llama sistema de ecuaciones todo conjunto de ecuaciones
              distintas que tiene una o m√°s soluciones comunes. Resolver un
              sistema de ecuaciones simult√°neas es hallar el conjunto de valores
              que satisfacen simult√°neamente cada una de sus ecuaciones.
              Caracter√≠sticas de un sistema de dos ecuaciones lineales con dos
              inc√≥gnitas.
            </Text>
            <Text>
              Los resultados caracter√≠sticos de resolver un sistema de dos
              ecuaciones lineales con dos variables son:
            </Text>
            <UnorderedList color="red" m="10px 30px">
              <ListItem>
                <Text color="black">Existe √ļnicamente una soluci√≥n.</Text>{" "}
              </ListItem>
              <ListItem>
                <Text color="black">
                  Existe una cantidad infinita de soluciones.
                </Text>
              </ListItem>
              <ListItem>
                <Text color="black">No existe soluci√≥n.</Text>{" "}
              </ListItem>
            </UnorderedList>
            <Text>
              Un sistema es consistente si tiene por lo menos una soluci√≥n. Un
              sistema con un n√ļmero infinito de soluciones es dependiente y
              consistente. Un sistema es inconsistente si carece de soluci√≥n.
            </Text>
          </Box>
          <EcuationContainer cant={"a"} boxWidth="85%" />
        </Grid>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px" textAlign="justify">
          <Heading id="TSE" textAlign="left">
            Tipos de sistemas de ecuaciones
          </Heading>
          <Text>
            Dependiendo del n√ļmero de soluciones que tengan los sistemas de
            ecuaciones lineales tendremos:
          </Text>
          <List ml="30px">
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistema Incompatible: no tiene soluci√≥n.
            </ListItem>
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistema Compatible Determinado (SCD): posee una √ļnica soluci√≥n.
            </ListItem>
            <ListItem>
              <CircleIcon boxSize={2} mr={2} color="red.500" />
              Sistema Compatible Indeterminado (SCI): posee infinitas
              soluciones.
            </ListItem>
          </List>
          <SCantSoluciones />
          <SEquivalent />
          <SStaggered />
        </Box>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <TeoremaRF />
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px" textAlign="justify">
          <Heading id="MS" textAlign="left">
            Metodos de Soluci√≥n
          </Heading>
          <Text>
            De los posibles m√©todos de soluci√≥n para una sistema de dos
            ecuaciones con dos incognitas, tres de los mas conocidos son el
            m√©todo de sustituci√≥n, m√©todo de igualaci√≥n y m√©todo de reducci√≥n. A
            continuaci√≥n se dar√°n algunas directrices para aplicar el primer
            m√©todo.
          </Text>
          <MSustitucion />
          <MEqualization />
          <MRedcution />
        </Box>
        <Divider borderColor="blackAlpha.600" w="95%" m="auto" />
        <Box p="10px 30px" textAlign="justify">
          <Heading mb="20px" id="ASE" textAlign="left">
            Aplicaciones de los sistemas de ecuaciones
          </Heading>
          <Grid
            w="100%"
            gridGap="10px 20px"
            gridAutoFlow="row dense"
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          >
            <Box>
              <Heading size="md" textAlign="left">
                Aplicaciones en la antiguedad
              </Heading>
              <Text mb="10px">
                Los sistemas de ecuaciones lineales se han utilizado durante
                siglos para resolver diversos problemas de la vida cotidiana, la
                ingenier√≠a, la f√≠sica, las matem√°ticas, la econom√≠a y otras
                ciencias. Los babilonios fueron los primeros en utilizar
                procedimientos de eliminaci√≥n de inc√≥gnitas para resolver estos
                sistemas. Un ejemplo de esto se encontr√≥ en una tablilla
                babil√≥nica que propon√≠a la resoluci√≥n de un sistema de
                ecuaciones.
              </Text>
              <Text m="10px 0">
                Los griegos pudieron resolver sistemas de ecuaciones utilizando
                m√©todos geom√©tricos. Thymaridas encontr√≥ una f√≥rmula para
                resolver un determinado sistema de n ecuaciones con n
                inc√≥gnitas, mientras que Diophante transform√≥ los problemas en
                ecuaciones lineales y solo acept√≥ soluciones positivas. Sin
                embargo, este m√©todo carec√≠a de un m√©todo general y hab√≠a que
                utilizar m√©todos excesivamente ingeniosos para cada problema. Un
                ejemplo de como hiceron uso de esto el siguente
              </Text>
              <Text textAlign="center">anchura/4 + longitud = 7manos</Text>
              <Text textAlign="center">longitud + anchura = 10manos</Text>
              <Text m="10px 0 ">
                Para resolver el sistema comenzaban asignando valores a la
                variable manos , por ejemplo se puede asignar el valor de 5 y se
                observan los valores posibles para anchura y longitud :
                anchura=20,longitud=30 . Para poder comprobar el resultado
                utilizaban un m√©todo parecido al que conocemos como 'm√©todo de
                eliminaci√≥n'.
              </Text>
            </Box>
            <Box>
              <Heading size="md" textAlign="left">
                Aplicaciones en la actualidad
              </Heading>
              <Text m="10px 0">
                Los sistemas de ecuaciones se utilizan en una amplia variedad de
                aplicaciones, incluidas la ingenier√≠a, la econom√≠a, las
                finanzas, la f√≠sica, la qu√≠mica, la biolog√≠a y la inform√°tica.
                En ingenier√≠a, los sistemas de ecuaciones se utilizan para
                resolver problemas como el an√°lisis de circuitos y el dise√Īo
                mec√°nico. En econom√≠a y finanzas, los sistemas de ecuaciones se
                utilizan para modelar mercados e instrumentos financieros. En
                f√≠sica y qu√≠mica, los sistemas de ecuaciones se utilizan para
                describir el comportamiento de part√≠culas y mol√©culas. En
                biolog√≠a, los sistemas de ecuaciones se utilizan para modelar el
                comportamiento de las c√©lulas y los organismos. Finalmente, en
                inform√°tica, los sistemas de ecuaciones se utilizan para
                resolver problemas como la optimizaci√≥n y el aprendizaje
                autom√°tico. Tambien se pueden ver m√°s usos en ciertas diciplinas
                como:
              </Text>
              <OrderedList m="10px 0px" mr="0">
                <ListItem>
                  Econom√≠a: Los sistemas de ecuaciones se utilizan para modelar
                  la oferta y la demanda de bienes y servicios en la econom√≠a.
                </ListItem>
                <ListItem>
                  Ingenier√≠a: Los sistemas de ecuaciones se utilizan para
                  resolver problemas relacionados con el dise√Īo estructural, la
                  ingenier√≠a el√©ctrica y otras disciplinas de la ingenier√≠a.
                </ListItem>
                <ListItem>
                  F√≠sica: Los sistemas de ecuaciones se utilizan para modelar el
                  comportamiento de sistemas f√≠sicos como part√≠culas, fluidos y
                  campos.
                </ListItem>
                <ListItem>
                  Qu√≠mica: Los sistemas de ecuaciones se utilizan para modelar
                  reacciones qu√≠micas y predecir sus resultados.
                </ListItem>
                <ListItem>
                  Biolog√≠a: Los sistemas de ecuaciones se utilizan para modelar
                  procesos biol√≥gicos como la expresi√≥n g√©nica y las rutas
                  metab√≥licas.
                </ListItem>
              </OrderedList>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Flex
        bg="blackAlpha.900"
        w="100%"
        h="75px"
        textAlign="center"
        alignItems="center"
      >
        <Text fontWeigth="100" size="xs" color="white" m="auto">
          Creado por Alfredo Tiapa y Javier Alvarado
        </Text>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Importa los estilos CSS (opcional)

function Mtabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>
        <h2>Contenido del Tab 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Contenido del Tab 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Contenido del Tab 3</h2>
      </TabPanel>
    </Tabs>
  );
}

export default Mtabs;
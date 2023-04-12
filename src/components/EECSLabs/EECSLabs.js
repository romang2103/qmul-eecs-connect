import React from 'react';
import './EECSLabs.css';

function EECSLabs() {
  return (
  <>
    <div class="toc-container">
    </div><div class="toc">
      <h2>Table of Contents</h2>
      <ul>
        <li><a href="#Labs">Labs and Locations</a></li>
        <li><a href="#opening-hours">Opening Hours</a></li>
        <li><a href="#Desktops">Desktops</a></li>
        <li><a href="#facility-info">Facility Inofrmation</a></li>
      </ul>
    </div>
    
    <div className="Labs">
        <table>
          <caption>Labs & Locations</caption>
          <tr>
            <th>Lab</th>

            <th>Location</th>
            <th>Floor</th>
            <th>Workstations</th>
            <th>Map (JPG)</th>
          </tr>
          <tr>
            <td>ITL Ground</td>
            <td>ITL</td>
            <td>Ground level</td>
            <td>102</td>
            <td><img src="https://support.eecs.qmul.ac.uk/wp-content/uploads/2019/05/MAP-ITL-Ground_rev201804.jpg" alt="ITL-Ground-Floor"></img></td>
          </tr>
          <tr>
            <td>ITL Middle</td>
            <td>ITL</td>
            <td>1st Floor</td>
            <td>98</td>
            <td><img src="https://support.eecs.qmul.ac.uk/wp-content/uploads/2019/05/MAP-ITL-Middle_2018.09.jpg" alt="ITL-Middle-Floor"></img></td>
          </tr>
          <tr>
            <td>ITL Top</td>
            <td>ITL</td>
            <td>2nd Floor</td>
            <td>90</td>
            <td><img src="https://support.eecs.qmul.ac.uk/wp-content/uploads/2019/05/MAP-ITL-Top_rev201804.jpg" alt="ITL-Top-Floor"></img></td>
          </tr>
          <tr>
            <td>Electronics Lab (South)</td>
            <td>Engineering Building</td>
            <td>3rd Floor</td>
            <td>48</td>
            <td><img src="https://support.eecs.qmul.ac.uk/wp-content/uploads/2019/05/MAP-Eng-3rd-floor-ElecLab-South.jpg" alt="Electronics-Lab-(South)"></img></td>
          </tr>
          <tr>
            <td>Electronics Lab (North)</td>
            <td>Engineering Building</td>
            <td>3rd Floor</td>
            <td>48</td>
            <td><img src="https://support.eecs.qmul.ac.uk/wp-content/uploads/2019/05/MAP-Eng-3rd-floor-ElecLab-North.jpg" alt="Electronics-Lab-(North)"></img></td>
          </tr>
          <tr>
            <td>4.02 Lab</td>
            <td>Computer Science 4.02</td>
            <td>4th Floor</td>
            <td>27</td>
            <td><img src="https://support.eecs.qmul.ac.uk/wp-content/uploads/2019/05/Map-DIL-CS402.jpg" alt="CS-4.02-Lab"></img></td>
          </tr>
          <tr>
            <td>IoC Lab (Institute of Coding)</td>
            <td>Eng B10</td>
            <td>Basement</td>
            <td>50</td>
            <td><img src="https://support.eecs.qmul.ac.uk/wp-content/uploads/2019/05/MAP-Eng-IoC-lab.jpg" alt="IoC-Lab"></img></td>
          </tr>
          <tr>
            <td>QB 202</td>
            <td>Queen's Building 202</td>
            <td>2nd Floor</td>
            <td>84</td>
            <td><img src="https://support.eecs.qmul.ac.uk/wp-content/uploads/2019/05/image00312.jpg" alt="Queen's-Building-202Lab"></img></td>
          </tr>
        </table>
      </div>
      <div id="opening-hours">
      <table>
        <caption>Opening Hours</caption>
        <tr>
          <th>Lab</th>
          <th>Days</th>
          <th>Hours</th>
        </tr>
        <tr>
          <td>ITL (Scheduled Labs)</td>
          <td>Mon – Fri</td>
          <td>09:00 – 18:00</td>
        </tr>
        <tr>
          <td>ITL Open Access</td>
          <td>Mon – Fri
            
            Sat – Sun
          </td>
          <td>18:00 – 23:00
            
            08:00 - 17:00</td>
        </tr>
        <tr>
          <td>Electronics Lab</td>
          <td>Mon – Fri</td>
          <td>09:00 – 17:00</td>
        </tr>
        <tr>
          <td>4.02 Lab</td>
          <td>TBA</td>
          <td>TBA</td>
        </tr>
        <tr>
          <td>IoC Lab</td>
          <td>TBA</td>
          <td>TBA</td>
        </tr>
        <tr>
          <td>QB 202</td>
          <td>TBA</td>
          <td>TBA</td>
        </tr>
      </table>
    </div>

    <div id="Desktops"></div>
    <table>
      <caption>Desktops</caption>
      <thead>
        <tr>
          <th>Lab</th>
          <th>Qty</th>
          <th>Model</th>
          <th>CPU</th>
          <th>RAM</th>
          <th>GPU</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ITL Ground</td>
          <td>102</td>
          <td>Dell OptiPlex 9030 AIO</td>
          <td>3.2GHz Intel Haswell Core i7</td>
          <td>16 GB RAM</td>
          <td>-</td>
        </tr>
        <tr>
          <td>ITL Middle</td>
          <td>63</td>
          <td>Dell OptiPlex 9030 AIO</td>
          <td>3.2GHz Intel Haswell Core i7</td>
          <td>16 GB RAM</td>
          <td>-</td>
        </tr>
        <tr>
          <td></td>
          <td>35</td>
          <td>Dell OptiPlex 7440 AIO</td>
          <td>3.4GHz Intel Skylake Core i7</td>
          <td>16 GB RAM</td>
          <td>-</td>
        </tr>
        <tr>
          <td>ITL Top</td>
          <td>20</td>
          <td>Dell OptiPlex 9030 AIO</td>
          <td>3.2GHz Intel Haswell Core i7</td>
          <td>16 GB RAM</td>
          <td>-</td>
        </tr>
        <tr>
          <td></td>
          <td>70</td>
          <td>Dell Precision 3620</td>
          <td>4.2GHz Intel Kaby Lake Core i7</td>
          <td>16 GB RAM</td>
          <td>Nvidia Quadro p2000 (Pascal)</td>
        </tr>
        <tr>
          <td>Electronics Lab</td>
          <td>96</td>
          <td>Dell OptiPlex 7460 AIO</td>
          <td>3.2GHz Intel Core i7</td>
          <td>16 GB RAM</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Drop-in Lab</td>
          <td>27</td>
          <td>Dell Precision 3620</td>
          <td>Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz</td>
          <td>16 GB RAM</td>
          <td>Nvidia Quadro P2000 (Pascal)</td>
        </tr>
        <tr>
          <td>IoC Lab</td>
          <td>50</td>
          <td>Dell Precision 3630</td>
          <td>Intel(R) Core(TM) i5-8500 CPU @ 3.00GHz</td>
          <td>16 GB RAM</td>
          <td>Nvidia Quadro P2000 (Pascal)</td>
        </tr>
        </tbody>
        </table>

      <div id = "facility-info"> </div>
      <h1>Facility Information</h1>
      <h2>Wi-Fi access</h2>
      <p>Wi-Fi (Eduroam) is available throughout the building. Check the ITS Wi-Fi Guide how to connect to Eduroam.</p>
      <h2>Printers</h2>
      <p>See <a href="https://support.eecs.qmul.ac.uk/services/student-printing/">Student Printing</a></p>
        
    </>
      
  );
}

export default EECSLabs;


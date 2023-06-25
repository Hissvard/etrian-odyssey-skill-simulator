import './App.css';
import useSkillTree from "./hooks/useSkillTree";
import CrossTop from "./components/Lines/CrossTop";
import CrossLeft from "./components/Lines/CrossLeft";
import CrossRight from "./components/Lines/CrossRight";
import CornerBottomLeft from "./components/Lines/CornerBottomLeft";
import CornerTopRight from "./components/Lines/CornerTopRight";
import LineHorizontal from "./components/Lines/LineHorizontal";
import LineVertical from "./components/Lines/LineVertical";
import CornerBottomRight from "./components/Lines/CornerBottomRight";
import ArrowRight from "./components/Lines/ArrowRight";
import ArrowLeft from "./components/Lines/ArrowLeft";
import SkillCell from "./components/SkillCell";

function App() {
    const skillTree = useSkillTree({
        maxSkillPoints: 70,
        elements: {
            'Axes': {
                description: "Increase damage dealt with axes.",
                data: [
                    ["Damage Increase", "110%", "111%", "112%", "113%", "119%", "120%", "121%", "122%", "123%", "130%"],
                ]
            },
            'Crush': {
                description: "A charging axe strike.",
                data: [
                    ["TP Cost", "4", "4", "5", "5", "6", "6", "6", "6", "6", "6"],
                    ["Power", "160%", "165%", "170%", "175%", "185%", "187%", "190%", "193%", "196%", "210%", "212%", "214%", "216%", "218%", "236%"],
                    ["Accuracy Modifier", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
                    ["Speed Modifier", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%", "70%", "70%", "70%", "70%", "70%"],
                ],
                needs: {'Axes': 1},
            },
            'Stunner': {
                description: "An axe attack that puts the enemy off-balance.",
                data: [
                    ["TP Cost", "3", "3", "4", "4", "5", "5", "5", "5", "5", "5"],
                    ["Power", "140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
                    ["Aliment Chance", "15%", "20%", "25%", "30%", "40%", "45%", "50%", "55%", "60%", "75%", "76%", "77%", "78%", "79%", "80%"],
                    ["Speed Modifier", "80%", "82%", "84%", "86%", "90%", "92%", "94%", "96%", "98%", "102%", "104%", "106%", "108%", "110%", "118%"]
                ],
                needs: {'Axes': 3},
            },
            'Silencer': {
                description: "An axe skill with a chance of binding the enemy's head.",
                data: [
                    ["TP Cost", "3", "3", "4", "4", "5", "5", "5", "5", "5", "5"],
                    ["Power", "130%", "131%", "132%", "133%", "134%", "135%", "136%", "137%", "138%", "140%", "141%", "142%", "143%", "144%", "150%"],
                    ["Aliment Chance", "20%", "21%", "22%", "23%", "29%", "30%", "31%", "32%", "33%", "40%", "41%", "42%", "43%", "44%", "52%"],
                    ["Accuracy Modifier", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
                    ["Speed Modifier", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
                ],
                needs: {'Axes': 7},
            },
            'Sword Mastery': {
                description: "Increase damage dealt with swords.",
                data: [
                    ["Weapon ATK", "110%", "111%", "112%", "113%", "119%", "120%", "121%", "122%", "123%", "130%"]
                ],
            },
            'Cleaver': {
                description: "A rushing sword slash.",
                data: [
                    ["TP Cost", "4", "4", "5", "5", "6", "6", "6", "6", "6", "6"],
                    ["Power", "140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
                    ["Accuracy Modifier", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
                    ["Speed Modifier", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"]
                ],
                needs: {'Sword Mastery': 1},
            },
            'Tornado': {
                description: "A whirling sword skill that strikes adjacent enemies.",
                data: [
                    ["TP Cost", "6", "6", "7", "7", "8", "8", "8", "8", "8", "8"],
                    ["Power", "140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
                    ["Adjacent Power", "100%", "102%", "104%", "106%", "118%", "120%", "122%", "124%", "126%", "140%", "142%", "144%", "146%", "148%", "164%"],
                    ["Accuracy Modifier", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
                    ["Speed Modifier", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"],
                ],
                needs: {'Sword Mastery': 5},
            },
            '2-Hit': {
                description: "Normal weapon attacks have a chance of hitting twice.",
                data: [
                    ["Chance", "10%", "11%", "12%", "13%", "16%", "17%", "18%", "19%", "20%", "23%"],
                ],
                needs: {'Sword Mastery': 5, 'Axes': 5}
            },
            'Allslash': {
                description: "A sword skill that hits a group of enemies 2-4 times.",
                data: [
                    ["TP Cost", "6", "6", "7", "7", "8", "8", "8", "8", "8", "8"],
                    ["Power", "140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
                    ["Accuracy Modifier", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%", "120%"],
                    ["Speed Modifier", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "80%", "100%", "100%", "100%", "100%", "100%"],
                    ["2 Hit Chance", "70%", "70%", "50%", "50%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"],
                    ["3 Hit Chance", "30%", "30%", "50%", "50%", "70%", "70%", "60%", "60%", "50%", "50%", "40%", "40%", "30%", "30%", "0%"],
                    ["4 Hit Chance", "0%", "0%", "0%", "0%", "30%", "30%", "40%", "40%", "50%", "50%", "60%", "60%", "70%", "70%", "99%"],
                    ["5 Hit Chance", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "1%"]
                ],
                needs: {'2-Hit': 3},
            },
            'HP Up': {
                description: 'Increase maximum HP.',
                data: [
                    ['HP Gained', '110%', '111%', '112%', '113%', '119%', '120%', '121%', '122%', '123%', '130%'],
                ]
            },
            'Blazer': {
                description: "Sword skill that follows fire magic with a flaming slash.",
                notes: "This is a chaser skill, meaning if the target is attacked with fire magic, character will " +
                    "follow up with a fire slash. This skill only deal elemental damage, though the initial strike is physical,",
                data: [
                    ["TP Cost", "8", "8", "9", "9", "10", "10", "10", "10", "10", "10"],
                    ["Power", "140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
                    ["Accuracy Modifier", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"]
                ],
                needs: {'Sword Mastery': 7, 'TP Up': 3},
            },
            'Freezer': {
                description: "Sword skill that follows ice magic with a freezing slash.",
                notes: "This is a chaser skill, meaning if the target is attacked with ice magic, character will " +
                    "follow up with a freezing slash. This skill only deal elemental damage, though the initial strike is physical,",
                data: [
                    ["TP Cost", "8", "8", "9", "9", "10", "10", "10", "10", "10", "10"],
                    ["Power", "140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
                    ["Accuracy Modifier", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"]
                ],
                needs: {'Sword Mastery': 7, 'TP Up': 3},
            },
            'Shocker': {
                description: "Sword skill that follows volt magic with a shocking slash.",
                notes: "This is a chaser skill, meaning if the target is attacked with volt magic, character will " +
                    "follow up with a volt slash. This skill only deal elemental damage, though the initial strike is physical,",
                data: [
                    ["TP Cost", "8", "8", "9", "9", "10", "10", "10", "10", "10", "10"],
                    ["Power", "140%", "145%", "150%", "155%", "165%", "167%", "170%", "173%", "176%", "190%", "192%", "194%", "196%", "198%", "216%"],
                    ["Accuracy Modifier", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%", "200%"]
                ],
                needs: {'Sword Mastery': 7, 'TP Up': 3},
            },
            'TP Up': {
                description: 'Increase maximum TP.',
                data: [
                    ['TP Gained', '110%', '112%', '114%', '116%', '128%', '130%', '132%', '134%', '136%', '150%'],
                ]
            },
            'ATK Up': {
                description: "Increase physical damage.",
                data: [
                    ["STR Increase", "110%", "111%", "112%", "113%", "119%", "120%", "121%", "122%", "123%", "130%"],
                ],
            },
            'War Cry': {
                description: "Increase attack Power at the expense of defense.",
                data: [
                    ["TP Cost", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3"],
                    ["Damage Increase", "110%", "113%", "116%", "119%", "125%", "127%", "129%", "131%", "133%", "140%", "141%", "142%", "143%", "144%", "152%"],
                    ["Damage Received", "120%", "120%", "120%", "120%", "120%", "118%", "116%", "114%", "112%", "110%", "110%", "110%", "110%", "110%", "110%"],
                    ["Speed Modifier", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"]
                ],
                needs: {'ATK Up': 3},
            },
            'Hell Cry': {
                description: "Abandon defense and stamina for greatly strengthened attacks.",
                data: [
                    ["TP Cost", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3"],
                    ["Damage Increase", "120%", "123%", "126%", "129%", "135%", "137%", "139%", "141%", "143%", "150%", "151%", "152%", "153%", "154%", "162%"],
                    ["Damage Received", "120%", "120%", "120%", "120%", "120%", "118%", "116%", "114%", "112%", "110%", "110%", "110%", "110%", "110%", "110%"],
                    ["Speed Modifier", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"],
                    ["MaxHp Modifier", "80%", "80%", "80%", "80%", "80%", "82%", "84%", "86%", "88%", "90%", "90%", "90%", "90%", "90%", "90%"]
                ],
                needs: {'ATK Up': 10},
            },
            'DEF Up': {
                description: "Increase physical defense.",
                data: [
                    ["Phys Damage Recieved Modifier", "95%", "94%", "93%", "92%", "91%", "90%", "89%", "88%", "87%", "85%"],
                ],
            },
            'Arm Heal': {
                description: "Regain the use of bound arms.",
                data: [
                    ["TP Cost", "2", "2", "2", "2", "1", "1", "1", "1", "1", "1"],
                    ["Speed Modifier", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%", "60%"]
                ],
                needs: {'DEF Up': 1},
            },
            'Flee': {
                description: "Sacrifice HP to escape from battle to the previous floor.",
                notes: "This skill cannot be used in unescapable battles.",
                data: [
                    ["TP Cost", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5"],
                    ["HP Loss", "50%", "50%", "50%", "50%", "50%", "45%", "40%", "35%", "30%", "25%", "20%", "15%", "10%", "5%", "0%"],
                    ["Chance", "60%", "64%", "68%", "72%", "80%", "82%", "84%", "86%", "88%", "98%", "100%", "100%", "100%", "100%", "100%"]
                ],
                needs: {'DEF Up': 5},
            },
            'Mine': {
                description:  "Mine for materials at item points.",
                data: [
                    ["Item Chance", "100%", "102%", "104%", "106%", "110%", "111%", "112%", "113%", "114%", "120%"],
                    ["Daily Limit", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"]
                ],
            }
        }
    });

    return (
        <div className="App">
            <h2>Etrian Odyssey Skill Simulator</h2>
            <p style={{
                color: skillTree.usedSkillPoints > skillTree.maxSkillPoints ? 'red' : 'white'
            }}>
                Skill Points: {skillTree.usedSkillPoints} / {skillTree.maxSkillPoints}
            </p>
            <table>
                <tbody>
                    <tr>
                        <SkillCell>{skillTree.component('Axes')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossTop text='Lv1'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Crush')}</SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossLeft text='Lv3'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Stunner')}</SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossLeft text='Lv7'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Silencer')}</SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}><CornerBottomLeft/></SkillCell>
                        <SkillCell style={{position: 'relative'}}><LineHorizontal/></SkillCell>
                        <SkillCell style={{position: 'relative'}}><CornerTopRight/></SkillCell>
                    </tr>
                    <tr>
                        <SkillCell>{skillTree.component('Sword Mastery')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossTop text='Lv1'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Cleaver')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}><LineVertical/></SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossLeft text='Lv5'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Tornado')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}><LineVertical/></SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossLeft text='Lv5'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('2-Hit')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CornerBottomRight text='Lv5'/>
                            <ArrowLeft/>
                        </SkillCell>
                    </tr>
                    <tr>
                        <SkillCell>{skillTree.component('HP Up')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}><LineVertical/></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CornerBottomLeft text='Lv3'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Allslash')}</SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossLeft text='Lv7'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Blazer')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CornerTopRight text='Lv3'/>
                            <ArrowLeft/>
                        </SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossLeft text='Lv7'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Freezer')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossRight text='Lv3'/>
                            <ArrowLeft/>
                        </SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CornerBottomLeft text='Lv7'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Shocker')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossRight text='Lv3'/>
                            <ArrowLeft/>
                        </SkillCell>
                    </tr>
                    <tr>
                        <SkillCell>{skillTree.component('TP Up')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}><LineHorizontal/></SkillCell>
                        <SkillCell style={{position: 'relative'}}><LineHorizontal/></SkillCell>
                        <SkillCell style={{position: 'relative'}}><CornerBottomRight/></SkillCell>
                    </tr>
                    <tr>
                        <SkillCell>{skillTree.component('ATK Up')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossTop text='Lv3'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('War Cry')}</SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CornerBottomLeft text='Lv10'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Hell Cry')}</SkillCell>
                    </tr>
                    <tr>
                        <SkillCell>{skillTree.component('DEF Up')}</SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CrossTop text='Lv1'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Arm Heal')}</SkillCell>
                    </tr>
                    <tr>
                        <SkillCell></SkillCell>
                        <SkillCell style={{position: 'relative'}}>
                            <CornerBottomLeft text='Lv5'/>
                            <ArrowRight/>
                        </SkillCell>
                        <SkillCell>{skillTree.component('Flee')}</SkillCell>
                    </tr>
                    <tr>
                        <SkillCell>{skillTree.component('Mine')}</SkillCell>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;

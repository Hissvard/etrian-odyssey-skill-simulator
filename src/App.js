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

            },
            'Crush': {
                needs: {'Axes': 1},
            },
            'Stunner': {
                needs: {'Axes': 3},
            },
            'Silencer': {
                needs: {'Axes': 7},
            },
            'Sword Mastery': {},
            'Cleaver': {
                needs: {'Sword Mastery': 1},
            },
            'Tornado': {
                needs: {'Sword Mastery': 5},
            },
            '2-Hit': {
                needs: {'Sword Mastery': 5, 'Axes': 5}
            },
            'Allslash': {
                needs: {'2-Hit': 3},
            },
            'HP Up': {
                description: 'Increase maximum HP.',
                data: [
                    ['HP Gained', '110%', '111%', '112%', '113%', '119%', '120%', '121%', '122%', '123%', '130%'],
                ]
            },
            'Blazer': {
                needs: {'Sword Mastery': 7, 'TP Up': 3},
            },
            'Freezer': {
                needs: {'Sword Mastery': 7, 'TP Up': 3},
            },
            'Shocker': {
                needs: {'Sword Mastery': 7, 'TP Up': 3},
            },
            'TP Up': {
                description: 'Increase maximum TP.',
                data: [
                    ['TP Gained', '110%', '112%', '114%', '116%', '128%', '130%', '132%', '134%', '136%', '150%'],
                ]
            },
            'ATK Up': {},
            'War Cry': {
                needs: {'ATK Up': 3},
            },
            'Hell Cry': {
                needs: {'ATK Up': 10},
            },
            'DEF Up': {},
            'Arm Heal': {
                needs: {'DEF Up': 1},
            },
            'Flee': {
                needs: {'DEF Up': 5},
            },
            'Mine': {}
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

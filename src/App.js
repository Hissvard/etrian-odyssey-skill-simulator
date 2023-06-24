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

function App() {
    const skillTree = useSkillTree({
        maxSkillPoints: 70,
        elements: {
            'Axes': {},
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
            'HP Up': {},
            'Blazer': {
                needs: {'Sword Mastery': 7, 'TP Up': 3},
            },
            'Freezer': {
                needs: {'Sword Mastery': 7, 'TP Up': 3},
            },
            'Shocker': {
                needs: {'Sword Mastery': 7, 'TP Up': 3},
            },
            'TP Up': {},
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
            <p>Skill Points: {skillTree.currentSkillPoints} / {skillTree.maxSkillPoints}</p>
            <table>
                <tbody>
                    <tr>
                        <td>{skillTree.component('Axes')}</td>
                        <td style={{position: 'relative'}}>
                            <CrossTop text='Lv1'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Crush')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}>
                            <CrossLeft text='Lv3'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Stunner')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}>
                            <CrossLeft text='Lv7'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Silencer')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}><CornerBottomLeft/></td>
                        <td style={{position: 'relative'}}><LineHorizontal/></td>
                        <td style={{position: 'relative'}}><CornerTopRight/></td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('Sword Mastery')}</td>
                        <td style={{position: 'relative'}}>
                            <CrossTop text='Lv1'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Cleaver')}</td>
                        <td style={{position: 'relative'}}><LineVertical/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}>
                            <CrossLeft text='Lv5'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Tornado')}</td>
                        <td style={{position: 'relative'}}><LineVertical/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}>
                            <CrossLeft text='Lv5'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('2-Hit')}</td>
                        <td style={{position: 'relative'}}>
                            <CornerBottomRight text='Lv5'/>
                            <ArrowLeft/>
                        </td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('HP Up')}</td>
                        <td style={{position: 'relative'}}><LineVertical/></td>
                        <td style={{position: 'relative'}}>
                            <CornerBottomLeft text='Lv3'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Allslash')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}>
                            <CrossLeft text='Lv7'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Blazer')}</td>
                        <td style={{position: 'relative'}}>
                            <CornerTopRight text='Lv3'/>
                            <ArrowLeft/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}>
                            <CrossLeft text='Lv7'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Freezer')}</td>
                        <td style={{position: 'relative'}}>
                            <CrossRight text='Lv3'/>
                            <ArrowLeft/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}>
                            <CornerBottomLeft text='Lv7'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Shocker')}</td>
                        <td style={{position: 'relative'}}>
                            <CrossRight text='Lv3'/>
                            <ArrowLeft/>
                        </td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('TP Up')}</td>
                        <td style={{position: 'relative'}}><LineHorizontal/></td>
                        <td style={{position: 'relative'}}><LineHorizontal/></td>
                        <td style={{position: 'relative'}}><CornerBottomRight/></td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('ATK Up')}</td>
                        <td style={{position: 'relative'}}>
                            <CrossTop text='Lv3'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('War Cry')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}>
                            <CornerBottomLeft text='Lv10'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Hell Cry')}</td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('DEF Up')}</td>
                        <td style={{position: 'relative'}}>
                            <CrossTop text='Lv1'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Arm Heal')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{position: 'relative'}}>
                            <CornerBottomLeft text='Lv5'/>
                            <ArrowRight/>
                        </td>
                        <td>{skillTree.component('Flee')}</td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('Mine')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;

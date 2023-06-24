import './App.css';
import useSkillTree from "./hooks/useSkillTree";

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
            <h3>Etrian Odyssey Skill Simulator</h3>
            <p>Skill Points: {skillTree.currentSkillPoints} / {skillTree.maxSkillPoints}</p>
            <table>
                <tbody>
                    <tr>
                        <td>{skillTree.component('Axes')}</td>
                        <td>-- lv 1 --</td>
                        <td>{skillTree.component('Crush')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>-- lv 3 --</td>
                        <td>{skillTree.component('Stunner')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>-- lv 7 --</td>
                        <td>{skillTree.component('Silencer')}</td>
                    </tr>
                    <tr>
                        <td>------</td>
                        <td>------</td>
                        <td>------</td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('Sword Mastery')}</td>
                        <td>-- lv 1 --</td>
                        <td>{skillTree.component('Cleaver')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>-- lv 5 --</td>
                        <td>{skillTree.component('Tornado')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>-- lv 5 --</td>
                        <td>{skillTree.component('2-Hit')}</td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('HP Up')}</td>
                        <td>|<br/>|<br/>|<br/></td>
                        <td>-- lv 3 ---</td>
                        <td>{skillTree.component('Allslash')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>--- lv 7 ---</td>
                        <td>{skillTree.component('Blazer')}</td>
                        <td>--- lv 3 ---<br/>|<br/>|<br/>|</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>--- lv 7 ---</td>
                        <td>{skillTree.component('Freezer')}</td>
                        <td>--- lv 3 ---<br/>|<br/>|<br/>|</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>--- lv 7 ---</td>
                        <td>{skillTree.component('Shocker')}</td>
                        <td>--- lv 3 ---<br/>|<br/>|<br/>|</td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('TP Up')}</td>
                        <td>------------</td>
                        <td>------------</td>
                        <td>--|</td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('ATK Up')}</td>
                        <td>--- lv3 ---</td>
                        <td>{skillTree.component('War Cry')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>--- lv10 ---</td>
                        <td>{skillTree.component('Hell Cry')}</td>
                    </tr>
                    <tr>
                        <td>{skillTree.component('DEF Up')}</td>
                        <td>--- lv1 ---</td>
                        <td>{skillTree.component('Arm Heal')}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>--- lv5 ---</td>
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

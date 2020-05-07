
import React, {useEffect, useState} from 'react';
import CreateTeamButton from './CreateTeamButton'
import TeamTable from './TeamTable'
import { Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
import { Team, Teammate } from '../interfaces';
  
interface Props {
    teams: object[];
    teamsData: object[];
    action: Function;
    getTeam: Function;
}

interface State {
    teammates: Teammate[];
    teams: Team[]
    teamsData: Team[]
    
}
// class UserDashboard extends React.Component<Props, State> {
//     constructor(props) {
//         super(props)
//         this.state = {
//             teammates: [],
//             teams: this.props.teams
//         }
//     }

//     componentDidMount() {
//     }
//     render() { 
//         const teams = this.props.teams
//         let tempTeamMates: Teammate[] = []
    
//         // if (teams.length) 
//         this.props.action(
//             teams.map((t: Team) => t.id)
//         ).then(
//             // data => console.log(data)
//             (res: Teammate[]) => tempTeamMates = res)
//         // )
//     console.log('temp teammates', tempTeamMates)
//         console.log(this.state)
//         return(
//             <div>


//             </div>

//         )
//     }
// }


const UserDashboard = (props: Props) => {
    const [teammates, setTeammates] = useState<Teammate[]>();
    const teams = props.teamsData;
    useEffect(() => {
            if (!teams.length) return;
            props.action(
                props.teams.map((t: Team) => t.id)
            ).then(
                // data => console.log(data)
                (res: Teammate[]) => setTeammates(res)
            )
    }, [teams]);

    


    // if (props.teams.length <= 0) return(
    //     // TODO this will prompt 'create team' button
    //     <div>oops! nothing to see here</div>
    // )

// TODO: a whole bunch of post requests, figuring out how some of ant design's API stuff around columns works

    // sort teammates by team ID
    // const table = teammates.map((teammates: Teammate[])=> {
        const teammateTotal = (count: number, cost: number) => count * cost
        
        // TODO these are post requests
        const addSwear = (count: number) => count++
        const paidUp = (count: number) => count = 0
        const columns = [
            {
                title: 'username',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'name',
                dataIndex: 'identify_as',
            },
            {
                title: 'email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'pledge amount',
                dataIndex: 'per_swear',
            },
            {
                title: 'swear count',
                dataIndex: 'temp_total_swears',
                // render: data=> (console.log(data))
            },
            {
                // TODO this is a post request
                title: 'add swear',
                dataIndex: 'temp_total_swears',
            },
            {
                title: 'total owed',
            },
            {
                // TODO this is a post request
                // title: 'paid up?',
                dataIndex: 'temp_total_swears',
                // render: <a>paid up?</a>
            },
            {
                // TODO post request /api/teams/team
                dataIndex: 'user_id',
                // render: <a>remove</a>
            },


        ]


    return <Table 
                className='team-table'
                columns={columns} 
                dataSource={teammates} 
                showHeader={true}
                size='small'
                // title={teammates[0].team_name}
                // key={teammates.length}
                >
                    {console.log('teamsData',teams)}
            console.log(teammates)
            </Table>
    // });
   return(
       <div>
           
            {}
        {/* //        <CreateTeamButton
        //        action={team.action}
        //        team={team.id}
        //        /> */}
            
       </div>
   )
}

 

export default UserDashboard;
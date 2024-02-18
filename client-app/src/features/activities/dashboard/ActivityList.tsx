

import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { Header } from 'semantic-ui-react';
import { Fragment } from 'react';




export default observer(function ActivityList() {
    const {activityStore} = useStore();
    const {groupedActivities} = activityStore;






    return (
        <>
        {groupedActivities.map(([group,activites])=> (
            <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
       
            {activites.map(activity=>(
               <ActivityListItem key={activity.id}activity={activity}/>
            ))}
   
                    </Fragment>
        ))}
         </>
         
        
      

    )
                
})


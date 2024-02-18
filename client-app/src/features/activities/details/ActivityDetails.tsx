import  { useEffect } from 'react';
import {   Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { observer } from 'mobx-react-lite';
import {  useParams } from 'react-router-dom';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedSideChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSideBar';




export default observer( function ActivityDetails(){


const {activityStore} = useStore();
const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
const {id} = useParams();

useEffect(() =>{
  if(id) loadActivity(id);
}, [id, loadActivity])



if(loadingInitial|| !activity) return <LoadingComponent content={''}/>;


    return (
       
            <Grid>
              <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedSideChat />
              </Grid.Column >

              <Grid.Column width={6}>
                <ActivityDetailedSidebar />
              </Grid.Column>
            </Grid>
    )
})
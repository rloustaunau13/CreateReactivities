
import { Button, Icon, Item,  Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { Link } from 'react-router-dom';


interface Props {
    activity:Activity
}
export default function ActivityListItem({activity}:Props){


    return (
   <Segment.Group>
    <Segment>
        <Item.Group>
            <Item.Image size='tiny' circular src='/assets/user.png'/>
            <Item.Content>
                <Item.Header as= {Link} to={`/activities/${activity.id}`}>
                    {activity.title}
                    </Item.Header>
                    <Item.Description>Hosted By Rafael</Item.Description>
            </Item.Content>
        </Item.Group>
    </Segment>


    <Segment>
        <span>
            <Icon name='clock'/>{activity.date}
            <Icon name='marker'/>{activity.venue}
        </span>
        <Segment secondary>
            Attendees go here
        </Segment>
    </Segment>

    <Segment clearing>
        <span>{activity.description}</span>
        <Button as={Link} to={`/activities/${activity.id}`} color='teal' floated='right' content='View'>

        </Button>
    </Segment>
   </Segment.Group>
    )
}
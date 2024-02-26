import { Link } from "react-router-dom";
import { Segment,Header,Icon,Button } from "semantic-ui-react";

export default function NotFound(){
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search'/>
                Oops - we've looked everywhere but we could not find what you are looking for!
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activites'>
                    Return to activities page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}
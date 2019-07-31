import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import {Segment, Grid, Divider, Icon, Header, Search, Button, Dimmer, Loader, Image, Placeholder, List } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                  Cari Dokumen
                </Header>
                <Search placeholder='Search Document....' />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name='pdf file outline' />
                  Tambah Dokumen Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
        <br /><br />
        <Grid container columns={3} stackable>
          <Grid.Column width={4}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line></Placeholder.Line>
                  <Placeholder.Line></Placeholder.Line>
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={9}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line></Placeholder.Line>
                  <Placeholder.Line></Placeholder.Line>
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={2}>
            <p>Website Terkait</p>
            <List>
              <List.Item icon='linkify' content={<a href='https://google.com'>Google</a>} />
              <List.Item icon='linkify' content={<a href='https://facebook.com'>Facebook</a>} />
              <List.Item icon='linkify' content={<a href='http://http://www.semantic-ui.com'>Semantic UI</a>} />
              <List.Item icon='linkify' content={<a href='http://niomic.com'>Niomic</a>} />
              <List.Item icon='linkify' content={<a href='https://reactjs.org.com'>React</a>} />
            </List>

          </Grid.Column>

        </Grid>

      </Segment.Group>
    );
  }
}


export default App;

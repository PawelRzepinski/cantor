import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../templates/PageTemplate';
import SideSectionImg from '../../assets/team.jpg';



const StyledTextArea = styled.div`
    column-count: 2;
    column-gap: 3.125rem;

    h1 {
        column-span: all;
        margin-bottom: 20px;
    }
`;


const AboutView = () => (
    <PageTemplate sideSectionImg={SideSectionImg}>
        <StyledTextArea>
            <h1>Lorem ipsum dolor sit amet.</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper risus in hendrerit gravida rutrum quisque. In cursus turpis massa tincidunt dui ut. Aliquet nec ullamcorper sit amet risus nullam eget felis. Eleifend quam adipiscing vitae proin sagittis. Fermentum posuere urna nec tincidunt praesent semper feugiat. Gravida quis blandit turpis cursus in hac habitasse. Mauris rhoncus aenean vel elit scelerisque. Enim nec dui nunc mattis enim ut tellus. Ut porttitor leo a diam. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Mi in nulla posuere sollicitudin aliquam. Rhoncus est pellentesque elit ullamcorper. Augue eget arcu dictum varius. Et netus et malesuada fames ac. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Enim tortor at auctor urna nunc id cursus metus aliquam.
            Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Orci dapibus ultrices in iaculis nunc. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Nibh venenatis cras sed felis eget. Aliquet nibh praesent tristique magna sit. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Et malesuada fames ac turpis egestas integer eget. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. At auctor urna nunc id cursus. Dictum fusce ut placerat orci nulla pellentesque dignissim. Sit amet nulla facilisi morbi tempus iaculis urna id. Bibendum at varius vel pharetra vel turpis nunc. Sed elementum tempus egestas sed sed. Adipiscing bibendum est ultricies integer quis auctor elit. Augue eget arcu dictum varius duis at consectetur lorem donec. Libero id faucibus nisl tincidunt eget nullam non. Id leo in vitae turpis massa sed elementum tempus egestas.
        </StyledTextArea>
    </PageTemplate>
)


export default AboutView;
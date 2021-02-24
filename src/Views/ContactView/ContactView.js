import React from 'react';
import styled from 'styled-components';
import PageTemplate from '../../templates/PageTemplate';
import SideSectionImg from '../../assets/office.jpg';
import BoxContact from '../../Components/atoms/BoxContact/BoxContact';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



const StyledBoxWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
`;


const ContactView = () => (
    <PageTemplate sideSectionImg={SideSectionImg}>
        <StyledBoxWrapper>
            <BoxContact icon={ faEnvelope } name={'E-mail'} infoA={'nazwa.email@contct.pl'} />
            <BoxContact icon={ faPhoneAlt } name={'Telefon'} infoA={'+48 123 456 789'} />
            <BoxContact icon={ faMapMarkerAlt } name={'Adres'} infoA={'Exchange street 12/34'} infoB={'01-234 Warszawa'} />
        </StyledBoxWrapper>
    </PageTemplate>
)


export default ContactView;
import React from 'react'
import {Route, Routes} from 'react-router-dom';

import main from './pages/main event';
import about from './pages/about me';
import project from './pages/projects';
import contact from './pages/contact us';
import gals from './pages/gallery';

const Utama = () => (
    <Routes>
        <Route exact path = "/" Component={main} />
        <Route exact path="/about me" Component={about}/>
        <Route exact path="/projects" Component={project}/>
        <Route exact path="/contact us" Component={contact}/>
        <Route path='/gallery' Component={gals}/>
    </Routes>
)

export default Utama;
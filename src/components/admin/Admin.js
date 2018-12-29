import React, {Component, Suspense} from 'react';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
} from '@coreui/react';
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Aside from "./layout/Aside";
import Sidebar from "./layout/Sidebar";

class Admin extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (
            <div className="app">
                <AppHeader fixed>
                    <Suspense  fallback={this.loading()}>
                        <Header/>
                    </Suspense>
                </AppHeader>

                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader />
                        <AppSidebarForm />
                        <Suspense>
                            {/*<AppSidebarNav />*/}
                            <Sidebar/>
                        </Suspense>
                        <AppSidebarFooter />
                        <AppSidebarMinimizer />
                    </AppSidebar>
                    <main className="main">
                        <AppBreadcrumb/>
                        <Container fluid>
                        </Container>
                    </main>
                    <AppAside fixed>
                        <Suspense fallback={this.loading()}>
                            <Aside/>
                        </Suspense>
                    </AppAside>
                </div>
                <AppFooter>
                    <Suspense fallback={this.loading()}>
                        <Footer/>
                    </Suspense>
                </AppFooter>
            </div>
        );
    }
}

export default Admin;
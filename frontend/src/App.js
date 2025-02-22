import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { themeSettings } from 'theme';
import { Formik } from 'formik';
import { createContext, useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Layout from './Attendee/scenes/layout';
import Dashboard from './Attendee/scenes/dashboard';
import FeedBacks from './Attendee/scenes/feedBacks';
import Attendees from './Attendee/scenes/attendees';
import DataFinalists from './Attendee/scenes/dataFinalists';
import Overview from './Attendee/scenes/overview';
import Daily from './Attendee/scenes/daily';
import Monthly from './Attendee/scenes/monthly';
import Breakdown from './Attendee/scenes/breakdown';
import RSVPEMAIL from './Attendee/scenes/revpemail';
import Administrator from './Attendee/scenes/administrator';
import AttendeeStatus from './Attendee/scenes/attendeeStatus';

import OLayout from './Org/OrgDashboardLayout';
import ODashboard from './Org/OrgDashboard';
import OLoginPage from './Org/OrgLogin';
import AllEventsTable from './Events/tables/AllEventsTable';
import SingleEvent from './Events/SingleEvent';
import AllEvents from './Events/AllEvents';
import EventCreationForm from 'Events/components/registrationForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import EventCalendar from 'Events/scenes/EventCalendar';
import { EventForm } from 'Events/scenes/EventForm';
import AllEventsAdmin from 'Events/scenes/AllEventsAdmin';
import ProfileFrame from 'Events/scenes/ProfileFrame';

import RLayout from './Resource/scenes/layout';
import RDashboard from './Resource/scenes/dashboard';
import ResourcesTable from './Resource/tables/allResources';
import PageNotFound from './Events/pages/PageNotFound.jsx';
import AllResourcesView from 'Resource/pages/AllResourcesView';
import AddReservation from 'Resource/views/AddReservation';
import ReservationTable from 'Resource/tables/allReservations';

import Speaker from 'Partners/organizer/speakers';
import Sponsors from 'Partners/organizer/sponsors';
import Volunteers from 'Partners/organizer/volunteers';
import Opportunities from 'Partners/organizer/opportunities';
import OpportunitiesList from 'Partners/user/volunteer/OpportunitiesList';
import AppliedOpportunitiesList from 'Partners/user/volunteer/AppliedOpportunitiesList';
import UpdateVolunteerApplication from 'Partners/user/volunteer/UpdateVolunteerApplication';
import OpportunityDetails from 'Partners/user/volunteer/OpportunityDetails';
import OpportunityRegister from 'Partners/user/volunteer/OpportunityRegister';
import AllSpeakers from 'Partners/organizer/speakers/AllSpeakers';
import AllSponsors from 'Partners/organizer/sponsors/AllSponsors';

import VLayout from 'Venue/src/scenes/layout';
import VDashboard from 'Venue/src/scenes/dashboard';
import VFeedBacks from 'Venue/src/scenes/feedBacks';
import VAttendees from 'Venue/src/scenes/attendees';
import VDataFinalists from 'Venue/src/scenes/dataFinalists';
import VLoginPage from 'Venue/src/scenes/login';
import VReview from 'Venue/src/scenes/venue/review';
import VVenue from 'Venue/src/scenes/venue/venue';
import VVenueQuotation from 'Venue/src/scenes/venue/venue-report';
import VAddVenue from 'Venue/src/scenes/venue/add-venue';
import VVenuePage from 'Venue/src/scenes/venue/edit-venue-page';
import VVenueProfile from 'Venue/src/scenes/venue/venue-profile';

import ALayout from 'Approval/src/scenes/layout';
import ADashboard from 'Approval/src/scenes/dashboard';
import ALoginPage from 'Approval/src/scenes/login';
import AApproval from 'Approval/src/scenes/Approval_Requests/approvalRequests';
import AApprovalRequests from 'Approval/src/scenes/Approval_Requests/allApprovalRequests';
import AAppointmentRequests from 'Approval/src/scenes/Appointments/appointmentRequests';
import AAppointments from 'Approval/src/scenes/Appointments/allAppointments';
import AAppointmentsUpcoming from 'Approval/src/scenes/Appointments/upcomingAppointments';
import EventManagerView from 'Approval/pages/EventManagerView';
import ApprovalMain from 'Approval/pages/ApprovalMain';
import Staffs from 'Approval/pages/Staffs';
import Admins from 'Approval/pages/Admins';
import RequestAppointment from 'Approval/pages/RequestAppointment.jsx';
import PrintAll from 'Approval/pages/PrintAll';
import ApprovalRequestMain from 'Approval/pages/Old/ApprovalRequestMain.jsx';
import ApprovalCreate from 'Approval/pages/Old/ApprovalCreate';
import ApprovalEdit from 'Approval/pages/Old/ApprovalEdit.jsx';

import VAppointments from 'Venue/src/scenes/venue/appointments';
import VAllBookings from 'Venue/src/scenes/venue/all-bookings';
import VBookings from 'Venue/src/scenes/venue/booking';
import VVenueListPage from 'Venue/AddVenue/pages/VVenueListPage';
import VVenueBook from 'Venue/AddVenue/pages/VVenueBook';
import VViewVenueProfile from 'Venue/AddVenue/pages/VViewVenueProfile';
import PublicVenueTable from 'Venue/PublicVenueTable';

import FLayout from './Finance/scenes/layout';
import FDashboard from 'Finance/scenes/dashboard';
import FOverview from 'Finance/scenes/finance/overview';
import FLoginPage from 'Finance/scenes/login';
import FRefunds from 'Finance/scenes/finance/refunds';
import FTable from './Finance/scenes/finance/table';
import FBills from './Finance/scenes/finance/bills';
import FPayments from './Finance/scenes/finance/payments';
import FReport from './Finance/scenes/finance/report';
import FPayPal from 'Finance/scenes/finance/paymentform';
import FPaymentOptions from 'Finance/scenes/finance/paymentpage';
import FPrintBill from 'Finance/scenes/finance/printbill';

import ULayout from './User/scenes/layout/Layout';
import UDashboard from './User/scenes/dashboard';
import UProfilePage from './User/pages/profilePage';
import ULogin from './User/pages/login';
import UAllusers from './User/pages/allUsers';
import USignUp from './User/pages/signUp';
import UBudgetForm from './User/pages/budgetForm';
import UBudgetView from './User/pages/budgetView';
import UserProfileEdit from './User/pages/UserProfileEdit';

import AddSpeaker from 'Partners/organizer/speakers/AddSpeaker';
import UpdateSpeaker from 'Partners/organizer/speakers/UpdateSpeaker';
import AddSponsor from 'Partners/organizer/sponsors/AddSponsor';
import UpdateSponsor from 'Partners/organizer/sponsors/UpdateSponsor';
import UpdateOpportunity from 'Partners/organizer/opportunities/UpdateOpportunity';
import AddOpportunity from 'Partners/organizer/opportunities/AddOpportunity';
import VolunteerSchedule from 'Partners/user/volunteer/VolunteerSchedule';

import VenuesReviewsAdd from 'Org/VenueReviews/pages/VenueReviewsAdd';
import VenuesReviewsUpdate from 'Org/VenueReviews/pages/VenuesReviewsUpdate';

function App() {
  // const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(
    () => createTheme(themeSettings('light'))
    // , [mode]
  );

  useEffect(() => {
    Aos.init({ offset: 0, duration: 1500 });
    window.addEventListener('load', Aos.refresh);
    if (window.location.href.includes('#rules')) {
      document.getElementById('rules').scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Routes>
              {/* Approval Routes */}
              {/* Org Dashbaord  */}
              <Route element={<OLayout />}>
                <Route
                  path="org/dashboard/events/:id"
                  element={<EventManagerView />}
                />
                <Route path="approval/:id" element={<ApprovalMain />} />
                <Route path="/org/dashboard/budget/list/:id" element={<Staffs />} />
                <Route path="admin/list/:id" element={<Admins />} />
                <Route
                  path="approval/create/:id"
                  element={<ApprovalCreate />}
                />
                <Route path="approval/edit/:id" element={<ApprovalEdit />} />
                <Route
                  path="approval/request/:id"
                  element={<ApprovalRequestMain />}
                />
                <Route path="approval/print/:id" element={<PrintAll />} />
                <Route
                  path="approval/r/appointment/:id"
                  element={<RequestAppointment />}
                />
                <Route
                  path="appointment/:id"
                  element={<RequestAppointment />}
                />

                <Route
                  path="/org/dashboard/events/:id"
                  element={<EventManagerView />}
                />
                <Route
                  path="/org/dashboard/events/approval/:id"
                  element={<ApprovalMain />}
                />
                <Route
                  path="/org/dashboard/staff/list/:id"
                  element={<Staffs />}
                />
                <Route
                  path="/org/dashboard/admin/list/:id"
                  element={<Admins />}
                />
                <Route
                  path="/org/dashboard/approval/appointment/:id"
                  element={<RequestAppointment />}
                />
                <Route path="events-draft" element={<AllEventsTable />} />
                <Route
                  path="/org/event/budget/:eventid"
                  element={<UBudgetForm />}
                />
                <Route
                  path="/org/event/viewBudget/:event_id"
                  element={<UBudgetView />}
                />
                <Route
                  path="/org/dashboard/events/approval/print/:id"
                  element={<PrintAll />}
                />

                <Route
                  path="/org/event/budget/:eventid"
                  element={<UBudgetForm />}
                />

                <Route
                  path="/org/event/viewBudget/:event_id"
                  element={<UBudgetView />}
                />

                <Route
                  path="/org/dashboard/venues/reviews"
                  element={<VenuesReviewsAdd />}
                />
                <Route
                  path="/org/dashboard/venues/reviews/added"
                  element={<VenuesReviewsUpdate />}
                />
              </Route>

              {/* Staff Dashbaord */}
              {/* <Route path="/staff" element={<ALoginPage />} /> */}
              <Route element={<ALayout />}>
                <Route
                  path="/staff/dashboard/*"
                  element={<Navigate to="/staff/dashboard" replace />}
                />
                <Route path="/staff/dashboard" element={<ADashboard />} />

                <Route
                  path="/staff/appointment/requests"
                  element={<AAppointmentRequests />}
                />
                <Route path="/staff/appointments" element={<AAppointments />} />
                <Route
                  path="/staff/appointments/upcoming"
                  element={<AAppointmentsUpcoming />}
                />
                <Route
                  path="/staff/approvals"
                  element={<AApprovalRequests />}
                />
                <Route
                  path="/staff/approval/requests"
                  element={<AApproval />}
                />
              </Route>

              {/* Event Routes */}
              <Route path="/events" element={<AllEvents />} />
              <Route path="/events/:id" element={<SingleEvent />} />
              <Route
                path="/events/:id/register"
                element={<EventCreationForm />}
              />
              <Route path="/events/:id/frame" element={<ProfileFrame />} />

              <Route path="/org/login" element={<OLoginPage />} />

              <Route element={<OLayout />}>
                <Route
                  path="/org/dashboard/*"
                  element={<Navigate to="/org/dashboard" replace />}
                />
                <Route path="/org/dashboard" element={<ODashboard />} />
                <Route
                  path="/org/dashboard/events"
                  element={<AllEventsTable />}
                />
                <Route
                  path="/org/dashboard/public events"
                  element={<AllEventsAdmin />}
                />
                <Route
                  path="/org/dashboard/event form"
                  element={
                    <Formik>
                      <EventForm />
                    </Formik>
                  }
                />
                <Route
                  path="/org/dashboard/event calendar"
                  element={<EventCalendar />}
                />
              </Route>

              {/* Attendee Routes */}
              <Route element={<Layout />}>
              
                <Route
                  path="/attendeemanager/dashboard"
                  element={<Dashboard />}
                />
                <Route
                  path="/attendeemanager/feedBacks"
                  element={<FeedBacks />}
                />
                <Route
                  path="/attendeemanager/attendees"
                  element={<Attendees />}
                />

                <Route
                  path="/attendeemanager/overview"
                  element={<Overview />}
                />
                <Route path="/attendeemanager/daily" element={<Daily />} />
                <Route path="/attendeemanager/monthly" element={<Monthly />} />
                <Route
                  path="/attendeemanager/breakdown"
                  element={<Breakdown />}
                />
                <Route
                  path="/attendeemanager/rsvpemail"
                  element={<RSVPEMAIL />}
                />
                <Route
                  path="/attendeemanager/administrator"
                  element={<Administrator />}
                />
                <Route
                  path="/attendeemanager/attendeeStatus"
                  element={<AttendeeStatus />}
                  // path="/event/opportunity/:opportunityID"
                  // element={<OpportunityDetails />}
                />
              </Route>

              {/* Resource Routes */}
              <Route
                path="/resources/:eid/reservation"
                element={<AllResourcesView />}
              />
              <Route
                path="/resource/:rid/reservation/:eid"
                element={<AddReservation />}
              />
              <Route element={<RLayout />}>
                <Route
                  path="/admin/resources/dashboard/*"
                  element={<Navigate to="/admin/resources/dashboard" replace />}
                />
                <Route
                  path="/admin/resources/dashboard"
                  element={<RDashboard />}
                />
                <Route
                  path="/admin/resources/dashboard/resources"
                  element={<ResourcesTable />}
                />
                <Route
                  path="/admin/resources/dashboard/reservations"
                  element={<ReservationTable />}
                />
              </Route>

              {/*Partner Routes */}
              <Route element={<OLayout />}>
                {/* <Route path="/admin/venue/dashboard/*" element={<Navigate to="/admin/venue/dashboard" replace />} /> */}
                <Route
                  path="/org/dashboard/speakers/:eventID"
                  element={<Speaker />}
                />
                <Route
                  path="/org/dashboard/addSpeaker/:eventID"
                  element={<AddSpeaker />}
                />
                <Route
                  path="/org/dashboard/updateSpeaker/"
                  element={<UpdateSpeaker />}
                />
                <Route
                  path="/org/dashboard/sponsors/:eventID"
                  element={<Sponsors />}
                />
                <Route
                  path="/org/dashboard/addSponsor/:eventID"
                  element={<AddSponsor />}
                />
                <Route
                  path="/org/dashboard/updateSponsor/"
                  element={<UpdateSponsor />}
                />
                <Route
                  path="/org/dashboard/all volunteers/"
                  element={<Volunteers />}
                />
                <Route
                  path="/org/dashboard/opportunities/:eventID"
                  element={<Opportunities />}
                />
                <Route
                  path="/org/dashboard/addOpportunity/:eventID"
                  element={<AddOpportunity />}
                />
                <Route
                  path="/org/dashboard/updateOpportunity/"
                  element={<UpdateOpportunity />}
                />
                <Route
                  path="/org/dashboard/all speakers/"
                  element={<AllSpeakers />}
                />
                <Route
                  path="/org/dashboard/all sponsors/"
                  element={<AllSponsors />}
                />
              </Route>
              <Route
                path="/event/opportunities/:eventID"
                element={<OpportunitiesList />}
              />
              <Route
                path="/event/opportunity/:opportunityID"
                element={<OpportunityDetails />}
              />
              <Route
                path="/applyAsAVolunteer/:opportunityID"
                element={<OpportunityRegister />}
              />
              <Route
                path="/event/appliedOpportunities/:userID"
                element={<AppliedOpportunitiesList />}
              />
              <Route
                path="/event/appliedOpportunities/schedule/:oppID"
                element={<VolunteerSchedule />}
              />
              <Route
                path="/event/updateVolunteerApplication/:volunteerID"
                element={<UpdateVolunteerApplication />}
              />

              {/* Finance Routes */}
              <Route path="/finance/paypal/:id" element={<FPayPal />} />
              <Route
                path="/finance/paymentpage"
                element={<FPaymentOptions />}
              />
              <Route path="/finance/printbill" element={<FPrintBill />} />
              <Route path="*" element={<h1>Page not found!</h1>} />
              <Route path="/admin/finance" element={<FLoginPage />} />
              <Route element={<FLayout />}>
                <Route
                  path="/admin/finance/dashboard/*"
                  element={<Navigate to="/admin/finance/dashboard" replace />}
                />
                <Route
                  path="/admin/finance/dashboard"
                  element={<FDashboard />}
                />
                <Route path="/admin/finance/overview" element={<FOverview />} />
                <Route path="/admin/finance/refunds" element={<FRefunds />} />
                <Route path="/admin/finance/table" element={<FTable />} />
                <Route path="/admin/finance/bills" element={<FBills />} />
                <Route path="/admin/finance/payments" element={<FPayments />} />
                <Route path="/admin/finance/report" element={<FReport />} />
              </Route>

              {/* venue routes */}
              <Route>
                <Route path="/admin/venue" element={<VLoginPage />} />
                <Route element={<VLayout />}>
                  <Route
                    path="/admin/venue/dashboard/*"
                    element={<Navigate to="/admin/venue/dashboard" replace />}
                  />
                  <Route
                    path="/admin/venue/dashboard"
                    element={<VDashboard />}
                  />
                  <Route
                    path="/admin/venue/feedBacks"
                    element={<h1>FeedBacks</h1>}
                  />
                  <Route
                    path="/admin/venue/attendees"
                    element={<h1>Attendees</h1>}
                  />
                  <Route
                    path="/admin/venue/dataFinalists"
                    element={<VDataFinalists />}
                  />
                  <Route path="/admin/venue/venues" element={<VVenue />} />
                  <Route
                    path="/admin/venue/venues/edit/:id"
                    element={<VVenuePage />}
                  />
                  <Route
                    path="/admin/venue/venues/:id"
                    element={<VVenueProfile />}
                  />
                  <Route
                    path="/admin/venue/report"
                    element={<VVenueQuotation />}
                  />
                  <Route path="/admin/venue/add" element={<VAddVenue />} />
                  <Route
                    path="/admin/venue/breakdown"
                    element={<Breakdown />}
                  />
                  <Route path="/admin/venue/reviews" element={<VReview />} />
                </Route>
              </Route>

              {/* venue routes */}
              <Route>
                <Route path="/admin/venue" element={<VLoginPage />} />
                <Route element={<VLayout />}>
                  <Route
                    path="/admin/venue/dashboard/*"
                    element={<Navigate to="/admin/venue/dashboard" replace />}
                  />
                  <Route
                    path="/admin/venue/dashboard"
                    element={<VDashboard />}
                  />
                  <Route
                    path="/admin/venue/feedBacks"
                    element={<h1>FeedBacks</h1>}
                  />
                  <Route
                    path="/admin/venue/attendees"
                    element={<h1>Attendees</h1>}
                  />
                  <Route
                    path="/admin/venue/dataFinalists"
                    element={<VDataFinalists />}
                  />
                  <Route path="/admin/venue/venues" element={<VVenue />} />

                  <Route
                    path="/admin/venue/appointments"
                    element={<VAppointments />}
                  />
                  <Route
                    path="/admin/venue/bookings"
                    element={<VAllBookings />}
                  />
                  <Route path="/admin/venue/requests" element={<VBookings />} />
                </Route>
              </Route>

              {/* venue add to an event */}
              <Route>
                <Route path="/venue" element={<h1>Browse Venue Page</h1>} />
                <Route>
                  <Route path="/venue/:vid/list" element={<VVenueListPage />} />
                  <Route
                    path="/venue/:vid/list/:id"
                    element={<VViewVenueProfile />}
                  />
                  <Route path="/venue/:vid/book/:id" element={<VVenueBook />} />
                  <Route
                    path="/venue/payment/:id"
                    element={<FPaymentOptions />}
                  />
                </Route>
              </Route>

              {/* public venue time table page */}
              <Route
                path="/venue/timetable/:id"
                element={<PublicVenueTable />}
              />

              {/*User Routes */}

              <Route path="/" element={<ULogin />} />

              <Route element={<ULayout />}>
                <Route path="/admin/dashboard" element={<UDashboard />} />
                <Route path="/admin/allUsers" element={<UAllusers />} />
                <Route path="/admin/register" element={<USignUp />} />
                <Route path="/admin/profile" element={<UProfilePage />} />
                <Route
                  path="/admin/profile/edit"
                  element={<UserProfileEdit />}
                />
                <Route path="/admin/event" element={<AllEventsAdmin/>}/>
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </LocalizationProvider>
  );
}

export default App;

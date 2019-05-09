import { SessionListComponent } from "./session-list.component";
import { ISession } from "../shared/event.model";


describe('SesseionListComponent', () => {
    let component : SessionListComponent
    let mockAuthService, mockVoterService

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService)
    })

    describe('ngOnChanges', () => {
        
        it('should filter the session correctly', () => {
            component.sessions = <ISession[]>[{name: 'Session 1', level: 'Intermediate'},
                                  {name: 'Session 2', level: 'Intermediate'},
                                  {name: 'Session 3', level: 'beginner'}]


            component.filterBy = 'Intermediate'
            component.sortBy = 'name'
            component.eventId = 3

            component.ngOnChanges()

            expect(component.visibleSessions.length).toBe(2)
        })

        it('should sort the session correctly', () => {
            component.sessions = <ISession[]>[{name: 'Session 1', level: 'Intermediate'},
                                  {name: 'Session 3', level: 'Intermediate'},
                                  {name: 'Session 2', level: 'beginner'}]

            component.filterBy = 'all'
            component.sortBy = 'name'
            component.eventId = 3

            component.ngOnChanges()
           
           expect(component.visibleSessions.length).toBe(3)
           expect(component.visibleSessions[2].name).toBe('Session 3')
        })
    })
})
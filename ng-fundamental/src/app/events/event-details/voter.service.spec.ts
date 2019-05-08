import { VoterService } from "./voter.service";
import { ISession } from "../shared/event.model";
import { of } from "rxjs";


describe('VoterService', () => {
    let voterService: VoterService,
    mockhttp
    
    beforeEach(() => {
        mockhttp = jasmine.createSpyObj('mockHttp', ['delete','post'])
        voterService = new VoterService(mockhttp)

    })

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            var session = { id: 6, voters : ['joe','john'] }
            mockhttp.delete.and.returnValue(of(false))
            voterService.deleteVoter(3, <ISession>session, "joe")
            expect(session.voters.length).toBe(1)
            expect(session.voters[0]).toBe("john")
        })

        it('should call http.delete with right URL', () => {
            var session = { id: 6, voters : ['joe','john'] }
            mockhttp.delete.and.returnValue(of(false))
            voterService.deleteVoter(3, <ISession>session, "joe")
            
            expect(mockhttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe')
        })
    })

    describe('addVoter', () => {
        it('should call http.post with right URL', () => {
            var session = { id: 6, voters : ['john'] }
            mockhttp.post.and.returnValue(of(false))
            voterService.addVoter(3, <ISession>session, "joe")
            
            expect(mockhttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, 
                jasmine.any(Object))
        })
    })
})
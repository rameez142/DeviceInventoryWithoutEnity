
import { Injectable , Output,EventEmitter} from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import {patrolcars} from '../models/patrolcars';
import {handhelds} from '../models/handhelds';
import {accessorycls} from '../models/accessorycls';
import {persons} from '../models/persons';
import {citygroups} from '../models/citygroups';
import { ahwalmapping } from '../models/ahwalmapping';
import {user} from '../models/user';

@Injectable()

export class CommonService {
  private api_url: any = document.getElementsByTagName('base')[0].href;

  constructor(private http: HttpClient) {
   }
//#region "PatrolCars"
  public GetPatrolCarList(ahwal:number,userid:number){
    return this.http.post(this.api_url + '/api/maintainence/patrolcarslist',ahwal, { responseType: 'text' })
    }

  public AddPatrolCar(frm:patrolcars){
     return this.http.post(this.api_url + '/api/maintainence/addpatrolcar', frm, { responseType: 'text' })
    }

  public UpdatePatrolCar(frm:patrolcars){
        return this.http.post(this.api_url + '/api/maintainence/updatepatrolcar', frm, { responseType: 'text' })
    }

  public DeletePatrolCar(frm:patrolcars){
          //console.log(frm);
          return this.http.post(this.api_url + '/api/maintainence/delpatrolcar', frm, { responseType: 'text' })
    }

    public GetPatrolCarTypes(){
            return this.http.post(this.api_url + '/api/maintainence/patrolcartypes', null, { responseType: 'text' })
   }

   public GetpatrolcarsInventoryList(ahwalid:number,userid:number){
    //console.log(ahwalid);
    return this.http.get(this.api_url + '/api/maintainence/patrolcarsinventory?ahwalid=' + ahwalid + '&userid=' + userid, { responseType: 'text' })
    }

//#endregion "PatrolCars"
//#region "Hand Held"
public GethandheldsList(){
  return this.http.post(this.api_url + '/api/maintainence/handheldlist', null, { responseType: 'text' })
  }
public Addhandhelds(frm:handhelds){
  return this.http.post(this.api_url + '/api/maintainence/addhandheld', frm, { responseType: 'text' })
  }

  public Updatehandhelds(frm:handhelds){
    return this.http.post(this.api_url + '/api/maintainence/updatehandheld', frm, { responseType: 'text' })
    }

    public Deletehandhelds(frm:handhelds){
      console.log(frm);
      return this.http.post(this.api_url + '/api/maintainence/delhandheld', frm, { responseType: 'text' })
      }
      public GetHandHeldsInventoryList(ahwalid:number,userid:number){
        return this.http.get(this.api_url + '/api/maintainence/handheldinventory?ahwalid=' +
        ahwalid + '&userid=' + userid, { responseType: 'text' })
        }
//#endregion "Hand Held"

//#region "Accessory"
public GetaccessoryList(){
  return this.http.post(this.api_url + '/api/maintainence/accessorylist', null, { responseType: 'text' })
  }
public Addaccessory(frm:accessorycls){
  return this.http.post(this.api_url + '/api/maintainence/addaccessory', frm, { responseType: 'text' })
  }

  public Updateaccessory(frm:accessorycls){
    return this.http.post(this.api_url + '/api/maintainence/updateaccessory', frm, { responseType: 'text' })
  }

public Deleteaccessory(frm:accessorycls){
      console.log(frm);
      return this.http.post(this.api_url + '/api/maintainence/delaccessory', frm, { responseType: 'text' })
  }

  public GetAccessoryInventoryList(){
    return this.http.post(this.api_url + '/api/maintainence/accessoryinventory', null, { responseType: 'text' })
    }
//#endregion "Accessory"

//#region "Persons"
public GetpersonList(){
  return this.http.post(this.api_url + '/api/maintainence/PersonsList', null, { responseType: 'text' })
  }
public Addpersons(frm:persons){
  return this.http.post(this.api_url + '/api/maintainence/addpersons', frm, { responseType: 'text' })
  }

  public Updatepersons(frm:persons){
    return this.http.post(this.api_url + '/api/maintainence/updatepersons', frm, { responseType: 'text' })
    }

    public Deletepersons(frm:persons){
      console.log(frm);
      return this.http.post(this.api_url + '/api/maintainence/delpersons', frm, { responseType: 'text' })
      }

//#endregion "Persons"

 //#region "Dispatch"

      public GetDispatchList(){
        return this.http.get(this.api_url + '/api/dispatch/dispatchList', { responseType: 'json' })
        }

        public GetPersonList(userid:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/personsList?userid=' + userid, { responseType: 'json' })

        }

        public GetShiftsList()
        {
          return this.http.get(this.api_url + '/api/dispatch/shiftsList', { responseType: 'json' })

        }



        public GetResponsibiltyList()
        {
          return this.http.get(this.api_url + '/api/dispatch/rolesList', { responseType: 'json' })

        }


        public GetSectorsList(userid:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/sectorsList?userid=' + userid , { responseType: 'json' })

        }

        public GetCityList(userid:number,sectorid:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/cityList?userid=' + userid + '&sectorid=' + sectorid, { responseType: 'json' })

        }

        public GetAssociateList(userid:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/associateList?userid=' + userid , { responseType: 'json' })

        }

        public GetPersonForUserForRole(mno:number,userid:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/personForUserForRole?mno=' +
          mno + '&userid=' + userid , { responseType: 'json' });

        }

        public GetCityGroupForAhwal(ahwalid:number,sectorid?:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/cityGroupforAhwal?ahwalid=' +
           ahwalid + '&sectorid=' + sectorid, { responseType: 'json' });

        }

        public AddAhwalMapping(ahwalmappingobj:ahwalmapping,userobj:user)
        {
          console.log('ahwalmappingobj' + ahwalmappingobj);
          let myData = {
            ahwalmappingobj:ahwalmappingobj,
            userobj:userobj
          };

          return this.http.post(this.api_url + '/api/dispatch/addAhwalMapping' ,
          myData,{ responseType: 'json' });

        }


        public UpDateAhwalMapping(ahwalmappingobj:ahwalmapping)
        {
          return this.http.post(this.api_url + '/api/dispatch/updateAhwalMapping' , ahwalmappingobj , { responseType: 'text' });
        }
        public GetMappingByID(AssociateMapId:number,userid:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/mappingByID?associateMapID=' + AssociateMapId
          + '&userid=' + userid , { responseType: 'json' });

        }

        public GetPatrolCarByPlateNumberForUserForRole(CheckInOutPatrol:number,userid:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/patrolCarByPlateNumberForUserForRole?CheckInOutPatrol=' +
          CheckInOutPatrol + '&userid=' + userid , { responseType: 'json' })

        }

        public GetHandHeldBySerialForUserForRole(CheckInOutHandHeld:number,userid:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/handHeldBySerialForUserForRole?CheckInOutHandHeld=' +
           CheckInOutHandHeld + '&userid=' + userid , { responseType: 'json' })

        }

        public GetMappingByPersonID(CheckInOutPerson:number,userid:number)
        {
          return this.http.get(this.api_url + '/api/dispatch/mappingByPersonID?CheckInOutPerson=' +
           CheckInOutPerson + '&userid=' + userid , { responseType: 'json' }) ;

        }
        public DeleteAhwalMapping(ahwalmappingid:number,userid:number)
        {
          return this.http.delete(this.api_url + '/api/dispatch/deleteAhwalMapping?ahwalmappingid=' +
          ahwalmappingid + '&userid=' + userid , { responseType: 'json' });

        }
        //#endregion "Dispatch"

public GetDeviceTypesList(){

  return this.http.post(this.api_url + '/api/maintainence/devicetypeslist', null, { responseType: 'text' })
 }

 public GetOrganizationList( userid:number){
   return this.http.post(this.api_url + '/api/maintainence/organizationlist', userid, { responseType: 'text' })
}

public updatePersonState(selmenu:string,ahwalmappingid:number,userid:number)
        {
          return this.http.put(this.api_url + '/api/dispatch/updatePersonState?selmenu='+ selmenu + '&ahwalmappingid=' +
          ahwalmappingid + '&userid=' + userid , { responseType: 'json' });

        }

        public GetCheckinPatrolCarList(ahwalid:number,userid:number){
          return this.http.get(this.api_url + '/api/maintainence/checkinpatrolcarslist?ahwalid=' + ahwalid + '&userid=' + userid , { responseType: 'json' });
          }

          public GetCheckinHandHeldList(ahwalid:number,userid:number){
            return this.http.get(this.api_url + '/api/maintainence/checkinhandheldslist?ahwalid=' + ahwalid + '&userid=' + userid , { responseType: 'json' });
            }
        /*     public CheckInAhwalMapping(milnumber:number,platenumber:number,userid:number){
              return this.http.get(this.api_url + '/api/maintainence/checkinhandheldslist?ahwalid=' + ahwalid + '&userid=' + userid , { responseType: 'text' });
              } */
          
}

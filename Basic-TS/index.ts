// - Create interface for the workload json
interface IWorkload {

        Nose: string;
        Station?: string;
        ATA: number;
        BOWTYPE: string;
        COMMENTIND: string;
        Priority: string;
        Carrier: string;
        CRITUPGRADE: boolean;
        Created: string;
        EMPLOYEENUMBER: string;
        FLEET: string;
        IDENTIFY: string;
        ID: number;
        MEL: string;
        MENUMBER: string;
        Modified: string;
        REF: any;
        TASKDESCRIPTION: string;
        TOTALHRS: number;
        CRIT: number;
        partsData: any[];
}       

// - Create types

type Workload =  {
     Nose: string;
      ATA: string;
      BOWTYPE: string;
      COMMENTIND: string;
      Priority: string;
      Carrier: string;
      CRITUPGRADE: false;
      Created: string;
      EMPLOYEENUMBER: string;
      FLEET: string;
      IDENTIFY: string;
      ID: number;
      MEL: string;
      MENUMBER: string;
      Modified: string;
      REF: any;
      TASKDESCRIPTION: string;
      TOTALHRS: number;
      CRIT: number;
      partsData: any[];
    }

// - Create simple person class, that accepts the persons first name

class Person {
    constructor(firstName){
        this._firstName;
    }

}

// - Create a Mecahnic class that exstends the above person class and has a field 'title' set to 'AMT'
class Mecahnic extends Person {
    constructor(AMT){
        super(firstName)
        this._title = AMT;
    }
}


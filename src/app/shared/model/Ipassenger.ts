

export interface Ipassenger{
    fullname : string;
    checkedIn : boolean;
    checkInDate : null | number;
    children : null | Ichild[];
    id: number
}

export interface Ichild {
    fname : string;
    lname : string;
}
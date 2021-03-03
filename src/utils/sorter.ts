import { ISet } from "@janda-com/front/dist/types/interface";

type OP<T> = {
    [s: string]: T;
}

export class Sorter<E extends string>  {
    private sort:E[]
    private set:ISet<E[]>
    constructor(sort:E[],set:ISet<E[]>,ops?:OP<E>) {
        this.sort = sort
        this.set = set;
    }

    public in = (foo:E):boolean =>  this.sort.includes(foo);
    
    public swtich = (change:string) => {
       let target:string | E | undefined = this.sort.find(st => st.includes(change));
       const targetIndex = this.sort.findIndex(st => st.includes(change));
       if(!target) throw Error(`this is noe ${change} in sort[] did you forget to privde default ? `);
       
       const isAsc = target.includes("_asc");
       
       if(isAsc) {
            target = target.replace("_asc","_desc")
        } else {
            target =target.replace("_desc","_asc")
        }
        console.log("target");
        console.log(target);

        this.sort[targetIndex] = target as E; 
        this.set([...this.sort]) 
       //asc desc switch
   }

   public remove = (st:E) => {
       const filtered = this.sort.filter(_st => _st !== st);
       this.set([...filtered]);
   }

   public add = (st:E) => {
       this.sort.push(st);
       this.set([...this.sort])
   }

}

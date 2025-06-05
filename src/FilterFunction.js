let FilterFunction = {
    Today: (Transaction_lists = []) => {
        const today = new Date();
        return Transaction_lists.filter(itm => {
            let trans = new Date(itm.date);
            return (
                trans.getDate() === today.getDate() &&
                trans.getMonth() === today.getMonth() &&
                trans.getFullYear() === today.getFullYear()
            )
        })
    },

    Week: (Transaction_lists = []) => {
        const now = new Date();
        const day = now.getDay(); 
        const diffToMonday = (day === 0 ? -6 : 1 - day);
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() + diffToMonday);
        startOfWeek.setHours(0, 0, 0, 0);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);    
        return Transaction_lists.filter(txn => {
            const txnDate = new Date(txn.date);
            return txnDate >= startOfWeek && txnDate <= endOfWeek;
        });
    },

    Month: (Transaction_lists = []) => {
        const today = new Date();
        return Transaction_lists.filter(itm => {
            let trans = new Date(itm.date);
            return (
                trans.getMonth() === today.getMonth() &&
                trans.getFullYear() === today.getFullYear()
            )
        })
    },

    Year: (Transaction_lists = []) => {
        const today = new Date();
        return Transaction_lists.filter(itm => {
            let trans = new Date(itm.date);
            return (
                trans.getFullYear() === today.getFullYear()
            )
        })
    },

    All:(Transaction_lists = [])=>{
        return Transaction_lists;
    }
}

export default FilterFunction;
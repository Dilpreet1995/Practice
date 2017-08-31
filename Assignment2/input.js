var StatusEnums= {
    Active: "Active", Complete: "Complete", Deleted: "Deleted"
};

    var TodoList={
    1:{Title:"First Todo",Status:StatusEnums.Active},
    2:{Title:"Second Todo",Status:StatusEnums.Complete},
    3:{Title:"Third Todo",Status:StatusEnums.Complete},
    4:{Title:"Fourth Todo",Status:StatusEnums.Deleted},
    5:{Title:"Fifth Todo",Status:StatusEnums.Deleted},
        6:{Title:"Sixth Todo",Status:StatusEnums.Complete}

};

    var NextTodo=7;



    module.exports={StatusEnums:StatusEnums,TodoList:TodoList,NextTodo:NextTodo};
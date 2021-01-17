enum permission {
    read = 1,
    write = 2,
    create = 4,
    delete = 8,
}

// 增加权限 或
function addPermission(target:permission,orgin:permission):permission{
    return target | orgin;
}

// 删除权限 异或
function deletePermission(target:permission,orgin:permission):permission{
    return target ^ orgin
}

// 判断是否存在权限 与
function hasPermission(target:permission,orgin:permission){
    return (target & orgin) == orgin;
}

let per = permission.read;
console.log(per);
per = addPermission(per,permission.write)
console.log("是否有写",hasPermission(per,permission.write))
per = deletePermission(per,permission.write);
console.log("是否有写",hasPermission(per,permission.write))
per = addPermission(per,permission.create);
console.log(hasPermission(per,permission.create))

let obj:Object;
obj = {a:'123'};
console.log(obj['a'].slice(2))




interface Props {

}

function Index(props: Props) {

    enum FileAccess {
        // constant members
        None,
        Read    = 1 << 1,
        Write   = 1 << 2,
        ReadWrite  = Read | Write,
        // computed member
        G = "123".length
    }
    console.log(FileAccess)

    const data = {
        f: {
            z: {
                name: 'z'
                // y:{
                //     age: 1
                // }
            }
        }
    }
    

    return (
        <div className="Index">
            Index
            ${data.f.z.name}
        </div>
    );

}

export default Index;


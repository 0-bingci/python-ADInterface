
import '../../../css/home.css'
export const dynamic = 'force-static'


export default async function Page() {
  const res = await fetch('http://127.0.0.1:5000/main', {
  })
  const data = await res.json()
  console.log(data);

  return (

    <div>
      <div className='header'>人员管理</div>
      <div className='operation'>
        <button>新增</button>
        <button>暂无</button>
      </div>
      <div className='exhibit'>
    <table aria-label="Example static collection table">
      <thead >
      <tr>
        <th className="box">姓名</th>
        <th className="box">学院</th>
        <th className="box">学号</th>
        <th className="box">班级</th>   
        <th className="box">账号</th>   
        <th className="box">UPN</th>   
        </tr>
      </thead>
      <tbody>
      
        {data.map((item,index)=>(
          <tr key={index}>
          <td className="box">{item.attributes.cn}</td>
          <td className="box">{item.attributes.department}</td>
          <td className="box">{item.attributes.description
          }</td>
          <td className="box">{item.attributes.physicalDeliveryOfficeName}</td>
          <td className="box">{item.attributes.sAMAccountName}</td>
          <td className="box">{item.attributes.userPrincipalName}</td>

          <td className="box"><button >禁用</button></td>
          <td className="box"><button >改密码</button></td>

          </tr>
        ))}
        
      </tbody>
    </table>
    </div>
    </div>
  );
}
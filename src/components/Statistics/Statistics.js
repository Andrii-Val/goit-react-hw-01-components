import {ListItem , List, StatisticsSection} from './Statistics.styled'

export const Statistics = ({datas, title})=>{
    return(
        <StatisticsSection className="statistics">
        { title && <h2 className="title">{title}</h2>}
         <List className="stat-list">
        {datas.map(data=> 
        <ListItem key={data.id } className="item">
            <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}%</span>
        </ListItem>
        
        )
        }
        
    
    </List>
    </StatisticsSection>
   );
    
};
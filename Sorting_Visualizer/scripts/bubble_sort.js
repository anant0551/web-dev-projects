/*
    *****************************
    DONE BY :- ANANT KUMAR SINGH 
    *****************************    
*/

function Bubble()
{
    //Setting Time Complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="⊖(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";
    
    //Setting Space Complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for (var i=0;i<array_size-1;1++)
        {
            for (var j=0;j<array_size-i-1;j++)
                {
                    div_update(divs[j],div_sizes[j],"yellow");//color Update

                    if(div_sizes[j]>div_sizes[j+1])
                        {
                            div_update(divs[j],div_sizes[j],"red");//color Update
                            div_update(divs[j+1],div_sizes[j+1],"red");//color Update                                                                                                                                                                    //done by anant kumar singh

                            var temp=div_sizes;
                            div_sizes[j]=div_sizes[j+1];
                            div_sizes[j+1]=temp;

                            div_update(divs[j],div_sizes[j],"red");//Height Update
                            div_update(divs[j+1],div_sizes[j+1],"red");//Height Update
                        }
                        div_update(divs[j],div_sizes[j], "blue");//color Update
                }
                div_update(divs[j],div_sizes[j], "green");//color Update
        }
        div_update(divs[0],div_sizes[0], "green");//color Update

        enable_buttons();
}
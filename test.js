var input = [
    [0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0], 
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]]

var calucluateDays = (rows, columns, input) => {
    //create 2D array to indicate the elements needs change at end of each day
    var toBeUpdated = new Array(rows)
    for(var i = 0; i < rows; i++) {
        toBeUpdated[i] = new Array(columns)
    }

    //initialize the 2D array by all false
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < columns; j++) {
            toBeUpdated[i][j] = false
        }
    }

    //determine the elements which need change
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < columns; j++) {
            if(input[i][j] == 0){
                if(i == 0) {
                    //the top left element special case
                    if(j == 0) {
                        //will check the right and down only
                        if(input[i][j+1] == 1 || input[i+1][j] == 1) {
                            toBeUpdated[i][j] = true
                            continue
                        }
                    }
                    //the top right element special case
                    if(j == columns-1) {
                        //will check the left and down only
                        if(input[i][j-1] == 1 || input[i+1][j] == 1) {
                            toBeUpdated[i][j] = true
                            continue
                        }
                    }
                    //will check the left, right, and down
                    if(input[i][j-1] == 1 || input[i][j+1] == 1|| input[i+1][j] == 1) {
                        toBeUpdated[i][j] = true
                        continue
                    }
                    continue
                }

                if(i == rows-1) {
                    //the bottom left element special case
                    if(j == 0) {
                        //will check the right and up only
                        if(input[i][j+1] == 1 || input[i-1][j] == 1) {
                            toBeUpdated[i][j] = true
                            continue
                        }
                    }
                    //the bottom right element special case
                    if(j == columns-1) {
                        //will check the left and up only
                        if(input[i][j-1] == 1 || input[i-1][j] == 1) {
                            toBeUpdated[i][j] = true
                            continue
                        }
                    }
                    //will check the left, right, and up
                    if(input[i][j-1] == 1 || input[i][j+1] || input[i-1][j] == 1) {
                        toBeUpdated[i][j] = true
                        continue
                    }
                    continue
                }

                if(j == 0) {
                    //skip the two corners in the first column
                    if(i != 0 && i != rows-1) {
                        //will check the right, up and down
                        if(input[i][j+1] == 1 || input[i-1][j] || input[i+1][j] == 1) {
                            toBeUpdated[i][j] = true
                            continue
                        }
                    }
                    continue
                }

                if(j == columns-1) {
                    //skip the two corners in the last column
                    if(i != 0 && i != rows-1) {
                        //will check the left, up, and down
                        if(input[i][j-1] == 1 || input[i-1][j] || input[i+1][j] == 1) {
                            toBeUpdated[i][j] = true
                            continue
                        }
                    }
                    continue
                }

                //if you reach here, so you will need to check the all 4 adjacent elements
                if(input[i][j-1] == 1 || input[i][j+1] == 1|| input[i-1][j] == 1 || input[i+1][j]) {
                    toBeUpdated[i][j] = true
                }
            }
        }
    }

    //update the elements by the end of each day
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < columns; j++) {
            if(toBeUpdated[i][j] == true) {
                input[i][j] = 1
            }
        }
    }

    return input
}

var days = 0
rows = input.length
columns = input[0].length

for(var i = 0; i < rows; i++) {
    for(var j = 0; j < columns; j++) {
        if(input[i][j] == 0) {
            input = calucluateDays(rows, columns, input)
            days++
        }
    }
}

console.log(days)

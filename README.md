## Reference
### [Global Objects](#global-objects)
#### [Table](#global-objects__table)
#### Coroutine
#### String
#### Math
#### Operating System Facilities (OS)
### Functions
#### Independent
#### Table Functions (like Array Methods e.g Array.map(), but just pure functions pair() used only with 'Table' aka Object )
#### Files
#### FIle Loaading Functions
#### Error Handling Functions
### Expressions and Operators
### Statements & Declarations



==========================================================================



## [Global Objects](#global-objects)  
[String](#global-objects__string)  
[Math](#global-objects__math)  
[Table](#global-objects__table)  
[Coroutine](#global-objects__coroutine)  
[Operating System Facilities (OS)](#global-objects__math)  

=======================
## <a name="global-objects_table">String</a>  

## <a name="global-objects_table">Math</a>  

## <a name="global-objects_table">Table</a>
Description

### Constructor
`{}`  
Creates a new `Table` object.

<!-- 
    Provide short descriptoin
    Link to `Refferences, Functions, {$function}
 -->
### Functions
[`next()`]  
[`getmetatable()`]  
[`setmetatable()`]  
[`rawset()`]  
[`rawget()`]  
[`pairs()`]  
[`ipairs()`]  

<!-- 
    Provide short descriptoin
    Link to `Refferences, Table, {$method}
 -->
### Methods
[`table.insert()`]
[`table.remove()`]
[`table.pack()`]
[`table.unpack()`]
[`table.concat()`]
[`table.sort()`]
[`table.move()`]

### Example
This section provides examples of common table operations in Lua.

#### Create an table



## <a name="global-objects_table">Coroutine</a>  
Description

## <a name="global-objects_table">Operating System Facilities (OS)</a>  
Description

==========================================================================










<details>
# Lua Documentation - Unofficial  🌙 
* Note: This is Work in progress

# [Lua](https://lua.org)

## What is Lua?
[Lua](https://www.lua.org/about.html) is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.

Lua combines simple procedural syntax with powerful data description constructs based on associative arrays and extensible semantics.
Lua is dynamically typed, runs by interpreting bytecode with a register-based virtual machine, and has automatic memory management with incremental garbage collection, making it ideal for configuration, scripting, and rapid prototyping.



## Who is Lua for?

Like with any language, choose the right tool for the job. 

Lua is rarerly used on its own, instead its usually embedded in other programs. 

Notable mentions: Roblox, Adobe Photoshop Lightroom, Angry Birds, Cheat Engine, and Garry's Mod.


Its very popular in the gaming industry but also its been used in network and system programs. 



## History of Lua

Lua was desinged by a team of of three Brazililian scientist, Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes.

Brazil had a very strict import policy from 1984 untill 1992, which also included hardware. Due to the hardware limitations in Brazil, the three scientist developed the scripting language called Lua.

The first release was in 1993.

The origin of the name  and name comes from the word `luna` which is Brazilian way of saying `moon`.

Lua was slightly different and incomprated the data-description suntax of SOL, and `SOL` in Portugese means `Sun` and `Lua` meaning `Moon`.

Lua was born.


# Getting Started

Downloading Lua

# Discord Server

Join Lua Community server on discord! https://discord.gg/nNu6FeHC









==========================================================================

 <!-- Guide
Refference -->

# Lua guide
## Reference




===========================================================================

# Reference
## Built in Objects
### Tables
### Coroutine
### String
### Math
### Operating System Facilities (OS)
## Functions
### Independent
### Table Functions (like Array Methods e.g Array.map(), but just pure functions pair() used only with 'Table' aka Object )
### Files
### FIle Loaading Functions
### Error Handling Functions
## Expressions and Operators
## Statements & Declarations
 
 
 

<!-- 
<!-- 

# Table of Contents

## Variables
## Baisc Types
### Nil
### Boolean
### Number
### String
### Function
### Userdata
### Thread
### Table
## Operators
## Iterations

-- > -->


===========================================================================


# <a name="doc_statements_and_declarations">Statements & declarations<a>

## Declaration
### [variable?]
### [<const>]
## Control Flow
### [break]()
## Iterations
### [if ... then]()
### [for ... do]()
### [while .... do]()

 




## [Functions](#)
### [Select](#doc_select)
 

## [Expressions]




## [Statements]
### [local]()


### [do]()
### [else]()
### [elseif]()
### [function]()
### [end]()

### [in]()
### [repeat]()
### [then]()
### [until]()

### [true]()
### [false]()
### [return]()
### [nil]()





===========================================================================

# <a name="doc_functions">Functions</a>

## <a name="doc_functions_independent">Indepenndent</a>
`print()`  
`select()`  
`tonumber()`  
`tostring()`  
`type()`  
`collectgarbage()`  
`rawequal()`  
`rawlen()`  
## <a name="doc_table_functions">Table Functions</a>
See table functions to view the functions
## <a name="doc_functions_files">Files</a>
`load()`  
`loadfile()`  
`dofile()` 
## <a name="doc_functions_error_handling">Error Handling</a>
`assert()`  
`warn()`  
`error()`  
`pcall()`  
`xpcall()`  




===========================================================================




# <a name="doc_operators">Operators</a>

## Arithmetic Operators

Addition +
Subtraction -
Multiplication *
Division /
Modulo %
Exponentiation ^
Negation (Unary-)

Relational Operators
 

## Logical Operators

All logical operators consider `false` and `nil` nil as false, and anything else as true.

<table class="fullwidth-table">
  <caption>
    Logical operators
  </caption>
  
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Usage</th>
      <th scope="col">Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <a href="Reference/Operators/Logical_AND"
          >Logical AND</a
        >
        (<code>and</code>)
      </td>
      <td><code>expr1 &#x26;&#x26; expr2</code></td>
      <td>
        Returns <code>expr1</code> if it can be converted to <code>false</code>;
        otherwise, returns <code>expr2</code>. Thus, when used with Boolean
        values, <code>&#x26;&#x26;</code> returns <code>true</code> if both
        operands are true; otherwise, returns <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="Reference/Operators/Logical_OR"
          >Logical OR </a
        >(<code>or</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Returns <code>expr1</code> if it can be converted to <code>true</code>;
        otherwise, returns <code>expr2</code>. Thus, when used with Boolean
        values, <code>||</code> returns <code>true</code> if either operand is
        true; if both are false, returns <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="Reference/Operators/Logical_NOT">Logical NOT </a>(<code>!</code>)
      </td>
      <td><code>not</code></td>
      <td>
        Returns <code>false</code> if its single operand that can be converted
        to <code>true</code>; otherwise, returns <code>true</code>.
      </td>
    </tr>
  </tbody>
</table>

 
## Relational Operators

Relational Operators always resolve in `true` or `false`.

<table class="standard-table">
<caption>
  Relational Operators
</caption>

<thead>
<tr>
  <th scope="col">Operator</th>
  <th scope="col">Description</th>
  <th scope="col">Examples returning true</th>
</tr>
</thead>

<tbody>
  <tr>
    <td>
      <a href="Reference/Operators#equality"
        >Equal</a
      >
      (<code>==</code>)
    </td>
    <td>Returns <code>true</code> if the operands are equal.</td>
    <td>
      <code>3 == var1</code>
      <p><code>"3" == var1</code></p>
      <code>3 == '3'</code>
    </td>
  </tr>
  <tr>
    <td>
      <a href="Reference/Operators#inequality"
        >Not equal</a
      >
      (<code>~=</code>)
    </td>
    <td>Returns <code>true</code> if the operands are not equal.</td>
    <td>
      <code>var1 != 4<br />var2 != "3"</code>
    </td>
  </tr>
    <td>
      <a
        href="Reference/Operators#greater_than_operator"
        >Greater than</a
      >
      (<code>></code>)
    </td>
    <td>
      Returns <code>true</code> if the left operand is greater than the right
      operand.
    </td>
    <td>
      <code>var2 > var1<br />"12" > 2</code>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="Reference/Operators#greater_than_or_equal_operator"
        >Greater than or equal</a
      >
      (<code>>=</code>)
    </td>
    <td>
      Returns <code>true</code> if the left operand is greater than or equal
      to the right operand.
    </td>
    <td>
      <code>var2 >= var1<br />var1 >= 3</code>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="Reference/Operators#less_than_operator"
        >Less than</a
      >
      (<code>&#x3C;</code>)
    </td>
    <td>
      Returns <code>true</code> if the left operand is less than the right
      operand.
    </td>
    <td>
      <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="Reference/Operators#less_than_or_equal_operator"
        >Less than or equal</a
      >
      (<code>&#x3C;=</code>)
    </td>
    <td>
      Returns <code>true</code> if the left operand is less than or equal to
      the right operand.
    </td>
    <td>
      <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
    </td>
  </tr>
</tbody>
</table>





===========================================================================


# <a name="doc_string">String</a>

## Methods

`String.byte()`  
`String.char()`  
`String.dump()`  
`String.find()`  
`String.format()`  
`String.gmatch()`  
`String.gsub()`  
`String.len()`  
`String.lower()`  
`String.match()`  
`String.pack()`  
`String.packsize()`  
`String.rep()`  
`String.reverse()`  
`String.sub()`  
`String.unpack()`  
`String.upper()`  


===========================================================================


# <a name="doc_math">Math</a>

## Methods
`Math.modf()`  
`Math.floor()`  
`Math.max()`  
`Math.celi()`  



# <a name="doc_modules">Modules</a>

## Methods
`require()`
`package.config`
`package.cpath`
`package.loaded`
`package.loadlib()`
`package.path`
`package.preload`
`package.searches`


===========================================================================

# <a name="refference_functions">Functions</a>
`next()`  
`getmetatable()`  
`setmetatable()`  
`rawset()`  
`rawget()`  
`rawlen()`  
`rawequal()`  
`pairs()`  
`ipairs()`  
`assert()`  
`warn()`  
`error()`  
`pcall()`  
`xpcall()`  
`print()`  
`select()`  
`tonumber()`  
`tostring()`  
`type()`  
`load()`  
`loadfile()`  
`dofile()`  
`collectgarbage()`  






## <a name="refference_table">Tables</a>

<details>
Editor notes: Show how to loop over  the tables, how to loop over them. Instead of showing just methods, include how to use a table somewhere.
</details>

A table allows storing a collection of data under a single variable. Lua has one mechanism to represent data structure, and does not have Classes, Arrays or Objects. Every data structure is represented by tables.

Unlike in other programming languages where's the index starts from `0`, Lua starts counting from `1`. Most libraries will start with the index of `1` therefore its a good practice to follow the convetion.


### Common Usages

Tables can represent classes, arrays and objects.

#### Reasemblance of a Class, or prototyping
```lua
local Class = {}

function Class.makeSound(sound)
    return sound
end

function Class.sit()
-- code...
end

print(Class.makeSound("Woof!"))

-- Output: Woof
```

#### Reasemblance of an Array
```lua 
local array = { "Dog", "Cat", "Hippo" }
``` 

#### Reasemblance of an Object
```lua
local object = { 
    name = "John", 
    age = 25, 
    isMarried: false
}
```

```
Note: Printing a table will return table's hash such as `table: 0x5566951939f0`
```

To get a table values you need to loop over them. Check out `pairs` and `ipairs.


### Constructor 
`{}` Creates a new `table`.


### Table Functions
<!-- 
  link to functions to the functions side?
 Dont write the explanation/examples under 'table' but under 'functions'? 
-->
[`next()`](#refference_function_next)  


[`getmetatable()`](#refference_function_getmetatable)  

[`setmetatable()`](#refference_function_setmetatable)  

[`rawset()`](#refference_function_rawset)  

[`rawget()`](#refference_function_rawget)  

[`pairs()`](#refference_function_pairs)  

[`ipairs()`](#refference_function_ipairs)  


### Methods

[`table.insert()`](#object_table_insert)  
Adds one element to the table.

[`table.remove()`](#object_table_remove)  
Removes one element from the table.

[`table.pack()`](#object_table_pack)  
Packs elements into a new table.

[`table.unpack()`](#object_table_unpack)  
Unpacks a table into values.

[`table.concat()`](#object_table_concat)  
Returns a combined string from a table.

[`table.sort()`](#object_table_sort)  
Sorts the values in a table.

[`table.move()`](#object_table_move)


===========================================================================


## <a name="table-insert">Table.insert()</a>
The `table.insert()` method adds one element to the end of the table.

### Syntax
```Lua
table.insert(tbl, value)
```

### Parameter
`tbl`
The table where the item should be removed from.

`value`
The element to add to the end of the table.


### Examples

#### Adding elements to a table

```Lua

local groceries = { "Bread", "Rice" }
table.insert(groceries, "Potatoes")

-- Output:  groceries = {"Bread", "Rice", "Potatoes"}

```


**[⬆ back to top](#table-of-contents)**




# <a name="table-remove">Table.remove()</a>
The `table.remove()` method removes one element from the table and shifts it.


## Syntax
```Lua
table.remove(tbl, index)
```

## Parameter
`tbl`
The table where the item should be removed from.

`index`
The index (position) of the current element in the array.

## Examples
 Removing "Rice" from groceries table.

```Lua
groceries = { "Bread", "Rice", "Peas" }
table.remove(groceries, 2)

-- Output: groceries = { "Bread", "Peas" }
```

**[⬆ back to top](#table-of-contents)**




## <a name="table-concat">Table.concat()</a>
The `table.concat()` function is used to concatinate table values into a string.

### Syntax
```Lua
table.concat(tbl, seperator)
```

### Parameter
`tbl`
The table to be concatinated.

`seperator (optional)`
Used as a separator between values.

### Examples

#### Only table provided to the function.
```Lua
local tbl = {"The","fox","jumps","over","the","lazy","dog",}

print(table.concat(tbl)) 

-- Output: Thefoxjumpsoverthelazydog
```

```Lua
local tab = { 1, 2, 3, 4 }

print(table.concat(tab)) 

-- Output: 1234
```

#### Table provided with the second parameter

```Lua
local tbl = {"The","fox","jumps","over","the","lazy","dog",}

print(table.concat(tbl," ")) 

-- Output: The fox jumps over the lazy dog
```

```Lua
local tbl = { 1, 2, 3, 4 }

print(table.concat(tbl, "-")) 

-- Output: 1-2-3-4
```



## <a name="table-pack">Table.pack()</a>
The `table.pack()` method is used to combine values into a newly created table.

### Syntax
```
table.pack(elements)
```

### Parameters
`elements`
The values to combine into a newly created table


### Examples

This will combine all values into a new table.
```Lua
productID =  234 
productName = "Dark Chocolate"
productIngredients = { "Cocoa Mass", "Cocoa Butter", "Vanilla", "Cocoa Solids: 70% min" }

darkChocolateTable = table.pack(productID, productName, productIngredients)
 
 print(darkChocolateTable)

 -- Output: table: 0x564c9ac0a210
 ```
 
 Accessing the product igredients and getting the second one.

 ```Lua
productID =  234 
productName = "Dark Chocolate"
productIngredients = { "Cocoa Mass", "Cocoa Butter", "Vanilla", "Cocoa Solids: 70% min" }

darkChocolateTable = table.pack(productID, productName, productIngredients)
 
print(darkChocolateTable[3][2])

-- Output: Cocoa Butter
 ```

**[⬆ back to top](#table-of-contents)**





## <a name="table-unpack">Table.unpack()</a>

The `table.unpack()` returns all values from a table.

### Syntax

```Lua
table.unpack(tbl)
```

### Parameters
`tbl`
The table to be unpacked.

### Examples

Unpacking a table
```Lua
groceries = { "Bread", "Rice", "Peas" }
print(table.unpack(groceries))

-- Output: Bread Rice Peas
```

Unpacking a table with tables inside
```Lua
groceries = {
    {
        id = 31,
        name = "Bread",
        quantity = 2
    },
    {
        id = 242,
        name = "Rice",
        quantity = 1
    },
    {
        id = 493,
        name = "Peas",
        quantity = 1
    }
}

print(table.unpack(groceries))

-- Output: table: 0x55db576a62a0 table: 0x55db576a4dd0 table: 0x55db941a4dd1
```

**[⬆ back to top](#table-of-contents)**





## <a name="table-sort">Table.sort()</a>

The `table.sort()` sorts a table and returns its value sorted. If no value is provited, the sort function will default to alphabetical sorting.


### Syntax
```Lua
table.sort(tbl)

table.sort(tbl, value)
```

### Parameters



### Examples



**[⬆ back to top](#table-of-contents)**



----------------------------------

# Comments

## Single line comments

```Lua
-- 
```

## Multi-line comments

```Lua
--[[
    


--]]
```


# Semicolons
Lua doesn't require semicolons, but you're free to put them if you want.


----------------------------------

# Plugins

## Table 
table.clear()


## JSON
link to JSON decoder - http://dkolf.de/src/dkjson-Lua.fsl/home























































































----------------------------------


# I'm looking for a
## Class
## Array


<details>


<summary>.</summary>


# Template


# Name
Description what it does

## Syntax
## Parameters
## Examples


notes
.
.
.
.
.
.
.












@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


# Lua Guidelines
It seems like general Lua programmers code seems to follow PHP style


## Variables
## Operators and comparison
## 



------------------------------------

# Variables

groceries
groceries <const>



Moon theme, because Lua is Luna/Moon

https://www.tutorialspoint.com/execute_Lua_online.php
https://www.typingclub.com/

https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript

@@@@

Lua com

21 reserved words
1 mechanism to represent data struture

Lua is a dynamic language, not type anotations needed


https://Luarocks.org/


If you're comning from a language such as JavaScript or PHP, some differences are worth noting
```
Count starts from 1 not 0
0 does not mean false
1 does not mean true
```

@@@@


coroutine.create() - suspend and resume code
coroutine.yeld() - puse
courutine.resume() - continue executoin

# Reserved words



# Other
## const
 
## pairs
## ipairs
## next
## rawset
## count















<!-- Docs to look at: React, Laravel, JS MDN -->

Use real life examples, not some foo bar, a, e, i... 

 

 
<const>

# Variables

In Lua to declaare a variable you simply write out the name

`variable`

if you want to you can also

`variable <const>`

# Scope

# Functions

# Tables aka Objects & Arrays

Lua doesn't have objects nor arrays - it has just tables. s
Tables in Luas is Arr
Objects in Lua are called Tables. 
Objects in Lua are called Arrays.They serve as an array and object.

To insert into the database, you need to `table.insert(table, value)`

To unpack values from a table, you need to unpack(data)

If you print a table, you will see table hash therefore you need to use special pairs and ipairs to show the content


<!-- object.getHash() -->
<!-- object.print() -->
<!-- object.count() -->
<!-- object.insertTo(object, data) -->
<!-- object.removeFrom(data, index) -->
<!-- object.unpack(data) -->
<!-- object.returnHashes() -->
<!-- object.create -->

<!-- Lua utility -->

To access properties of tables, you need to use special functions. pairs and ipairs.

Here are a few ways to work with them.

JavaScript Example
```js


```

Lua Example
```

```


LUA Example
```
local people = {
    test = {
    ['99'] = {
         name = "Fred",
         address = "16 Long Street",
         phone = "123456"
     },
     ['8989'] = {
         name = "Wilma",
         address = "16 Long Street",
         phone = "123456"
        }
    }
}
```
  
--   for index, data in pairs(people.test) do
--       print(index)
  
--       -- for key, value in pairs(data) do
--       --     print('\t', key, value)
--       -- end
--   end
  
  -- hash breaks this 





lunavel.com

Lunavel, the unofficial documentation you were looking for Luna!
Get started


Asigning Values

Reading values

Good/Bad pratcie

Creating your own functions 







Built-In Globals
Lua Globals
Roblox Globals

Lua Libraries
coroutine
debug
math
os
string
table
utf8
bit32


# Working with JSON



# Have plugins
Copy and paste it in your file app/illuminate

- JSON - ability to decode JSON into Lua
- Table [ print table Content], not just hash









# Getting Started

## Meet Lua
Lua is a scripting language ...


### Why Lua?

What is Luna

#### Flexibile

### Starter Kits
<!-- Table addons plugin -->
<!-- JSON plugin -->


# Data Types
nil
boolean
number
string
function
userdata
thread
table

# Declearing Variables

groceries = {}
groceries <const> = {}


https://stackoverflow.com/questions/4880368/how-to-delete-all-elements-in-a-Lua-table
# Statements and declerations





## Classes

## JSON
<!-- Lua doens't provide support for JSON, however there' is a package you can install to get support for it -->

<!-- Accessing values in tables -->


# Method explore - example
Short info 

<!-- list all methods  -->


# Property definition - Example Framework 
Explanation about the feature
<!-- Demo -->

## Syntax
<!-- code -->

## Description


## Examples







<!-- http://Lua-users.org/wiki/TablesTutorial -->
<!-- https://developer.roblox.com/en-us/articles/Metatables -->
<!-- https://www.Lua.org/pil/19.2.html -->


</details>

</details>
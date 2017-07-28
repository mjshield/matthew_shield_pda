### Testing task 1 code:

  Carry out static testing on the code below.  
  Read through the code.  Comment any errors you can see without correcting them.


def func1 val 
#needs to be ==, not =
  if val = 1
  return true
  else
  return false
  end
end
  
#def, not dif, also needs comma after first value "a"  
dif max a b
  if a > b
      return a 
  else
  #missing "return, not indented"
  b
  end 
end 
#additional end when none is needed
end 
  
def looper 
  for i in 1..10
  puts i
  #add condition to return 10 when found via if and else
  end
end
 
failures = 0 
 
if looper == 10 
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
#need additonal "end"
 
  
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end 
 
  
if max(100,1) == 100 
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  #syntax error "failrues"
  failrues = failures + 1
end

#no condition for failures being more than 0
if failures 
  puts "Test Failed"
else
  puts "Test Passed"
end




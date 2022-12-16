/**
 * leetcode
 */


import java.util.Set;
import java.util.HashSet;

public class leetcode {

    public static void main(String[] args) {
    
        String s = "hello";
        int i =0;
        int j=s.length()-1;
        Set<Character> set = new HashSet<>();
        set.add('a');
        set.add('e');
        set.add('i');
        set.add('o');
        set.add('u');
        set.add('A');
        set.add('E');
        set.add('I');
        set.add('O');
        set.add('U');
        
        char[] ch = s.toCharArray();
        
        while(i<j){
            // if(foundI==false){
                while(set.contains(ch[i])==false && i<ch.length){
                    i++;
                }
                while(set.contains(ch[j])==false && j>=0){
                    j--;
                }
                char temp  =ch[i];
                ch[i] = ch[j];
                ch[j]= temp;
                i++;
                j--;
            }
        // }
       System.out.println(String.valueOf(ch));

}

}


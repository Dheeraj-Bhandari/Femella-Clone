package main.Graph;
import java.util.*;
public class BFS {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no of Vertex");
        int v =sc.nextInt();
        System.out.println("Enter no of Edge");
        int e = sc.nextInt();
        int[][] adj_Mat = new int[v][v];
        for(int i=0; i<e; i++){
            int sv = sc.nextInt();
            int ev  = sc.nextInt();
            adj_Mat[sv][ev] =1;
            adj_Mat[ev][sv]=1;
        }

        printBFS(adj_Mat);




    }

    public static void printBFSHelper(int[][] mat,  boolean visited[],int sv){
        Queue<Integer> q = new LinkedList<>();
        q.add(sv);
        visited[sv] = true;
        int v = mat.length;
        while(q.size()>0){
            int front = q.poll();
            System.out.println(front);
            for (int i = 0; i < v; i++) {
                if(mat[front][i] ==1 && visited[i]==false){
                    q.add(i);
                    visited[i] = true;
                }
            }
        }
    }
    public static void printBFS(int[][] adj_mat){
        int v = adj_mat.length;
        boolean[]bool = new boolean[v];
        for(int i=0; i<v; i++){
            if(bool[i]==false){
                printBFSHelper(adj_mat, bool, i);
            }
        }
    }

        // DFS
    public static void printDFShelper(int[][] adj_Mat, boolean[]bool, int sv){
        System.out.println(sv);
        bool[sv] = true;
        int v = adj_Mat.length;
        for(int i =0; i<v; i++){
            if(adj_Mat[sv][i]==1 &&  bool[sv]==false){
                printDFShelper(adj_Mat, bool, i);
            }
        }
    }

    public static void printDFS(int[][] adj_mat){
        int v = adj_mat.length;
        boolean[]bool = new boolean[v];
        for(int i=0; i<v; i++){
            if(bool[i]==false){
                printDFShelper(adj_mat, bool, i);
            }
        }
    }

}

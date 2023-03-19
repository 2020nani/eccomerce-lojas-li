package br.com.docesdalu.application.controller;

import br.com.docesdalu.application.dto.input.ProdutoEdit;
import br.com.docesdalu.application.dto.input.ProdutoInput;
import br.com.docesdalu.application.dto.output.ProdutoOutput;
import br.com.docesdalu.application.mapper.ProdutoMapper;
import br.com.docesdalu.core.produto.Produto;
import br.com.docesdalu.core.produto.ProdutoServiceImpl;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.SftpException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@RestController
@Api(value = "Produtos")
public class ProdutoController {

    private ProdutoServiceImpl produtoService;
    private ProdutoMapper produtoMapper;

    public ProdutoController(ProdutoServiceImpl produtoService, ProdutoMapper produtoMapper) {
        this.produtoService = produtoService;
        this.produtoMapper = produtoMapper;
    }

    @ApiOperation(value = "Cadastra Produtos para a loja")
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "Retorna produto cadastrado"),
            @ApiResponse(code = 403, message = "Você não tem permissão para acessar este recurso"),
            @ApiResponse(code = 400, message = "Erro no tipo de request enviado"),
            @ApiResponse(code = 404, message = "Nao foi encontrado algum dado necessario"),
    })
    @PostMapping("/produtos")
    @Transactional
    private Produto salvarProduto(@Valid @RequestBody ProdutoInput produtoInput) throws JSchException, SftpException {
        return produtoService.salvarProduto(produtoMapper.produtoMapperInput(produtoInput));
    }

    @ApiOperation(value = "Retorna Produtos cadastrados")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Retorna lista de produtos cadastrado"),
            @ApiResponse(code = 403, message = "Você não tem permissão para acessar este recurso"),
            @ApiResponse(code = 400, message = "Erro no tipo de request enviado"),
            @ApiResponse(code = 404, message = "Nao foi encontrado algum dado necessario"),
    })
    @GetMapping("produtos")
    public Page<ProdutoOutput> listaProdutos(
            @RequestParam(required = false) Integer page, @RequestParam(required = false) Integer size,
            @PageableDefault(sort = "nome", direction = Sort.Direction.DESC, page = 0, size = 100) Pageable paginacao){
        return produtoService.buscarProdutos(paginacao)
                .map(ProdutoOutput::new);
    }

    @ApiOperation(value = "Retorna produto cadastrado conforme o id")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Retorna produto cadastrado"),
            @ApiResponse(code = 403, message = "Você não tem permissão para acessar este recurso"),
            @ApiResponse(code = 400, message = "Erro no tipo de request enviado"),
            @ApiResponse(code = 404, message = "Nao foi encontrado algum dado necessario"),
    })
    @GetMapping("produtos/{id}")
    public Produto buscaProduto(@PathVariable Long id){
        return produtoMapper.produtoOutput(produtoService.buscaProdutoPorId(id));
    }

    @ApiOperation(value = "Atualiza produto cadastrado")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Retorna mensagem de sucesso"),
            @ApiResponse(code = 403, message = "Você não tem permissão para acessar este recurso"),
            @ApiResponse(code = 400, message = "Erro no tipo de request enviado"),
            @ApiResponse(code = 404, message = "Nao foi encontrado algum dado necessario"),
    })
    @PutMapping("produtos/{id}")
    @Transactional
    public Produto atualizarProduto(@PathVariable("id") Long id, @RequestBody ProdutoEdit produtoEdit){
        Produto produtoAtual = produtoService.buscaProdutoPorId(id);
        return produtoService.atualizarProduto(produtoMapper.produtoMapperEdit(produtoEdit,produtoAtual));
    }

    @ApiOperation(value = "Deleta o produto cadastrado conforme o id")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Retorna mensagem de sucesso"),
            @ApiResponse(code = 403, message = "Você não tem permissão para acessar este recurso"),
            @ApiResponse(code = 400, message = "Erro no tipo de request enviado"),
            @ApiResponse(code = 404, message = "Nao foi encontrado algum dado necessario"),
    })
    @DeleteMapping("produtos/{id}")
    @Transactional
    public String deletarProduto(@PathVariable("id") Long id) {
        return produtoService.deletarProduto(id);
    }
}
